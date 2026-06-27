import { execFile } from "node:child_process";
import { mkdtemp, readdir, readFile, rm, writeFile } from "node:fs/promises";
import { tmpdir } from "node:os";
import { basename, join } from "node:path";
import { promisify } from "node:util";
import unzipper from "unzipper";
import { musicXmlToLevel } from "./musicxml.js";
import { writeMidi } from "./midi-writer.js";

const execFileAsync = promisify(execFile);
const AUDIVERIS = process.env.AUDIVERIS_BIN || "/opt/audiveris/bin/Audiveris";
const TIMEOUT_MS = Number(process.env.OMR_TIMEOUT_MS) || 180000;

async function extractMusicXml(mxlPath) {
  const archive = await unzipper.Open.file(mxlPath);
  const entry = archive.files.find((file) =>
    !file.path.startsWith("META-INF/") && /\.(musicxml|xml)$/i.test(file.path)
  );
  if (!entry) throw new Error("Audiveris n’a pas produit de MusicXML lisible.");
  return (await entry.buffer()).toString("utf8");
}

export async function convertScore(buffer, originalName) {
  const jobDir = await mkdtemp(join(tmpdir(), "jazz-keys-"));
  const safeName = basename(originalName).replace(/[^\p{L}\p{N}._-]+/gu, "-") || "score.pdf";
  const inputPath = join(jobDir, safeName.endsWith(".pdf") ? safeName : `${safeName}.pdf`);
  try {
    await writeFile(inputPath, buffer, { mode: 0o600 });
    await execFileAsync(AUDIVERIS, [
      "-batch", "-transcribe", "-export", "-save", "-output", jobDir, "--", inputPath,
    ], {
      timeout: TIMEOUT_MS,
      maxBuffer: 8 * 1024 * 1024,
      env: { ...process.env, HOME: jobDir },
    });

    const files = await readdir(jobDir, { recursive: true });
    const mxlRelative = files.find((file) => file.toLowerCase().endsWith(".mxl"));
    if (!mxlRelative) throw new Error("La reconnaissance n’a produit aucun fichier MusicXML.");
    const xml = await extractMusicXml(join(jobDir, mxlRelative));
    const result = musicXmlToLevel(xml, safeName.replace(/\.pdf$/i, ""));
    const midi = writeMidi(result.level);
    return {
      ...result,
      midi: midi.toString("base64"),
      midiMimeType: "audio/midi",
    };
  } finally {
    await rm(jobDir, { recursive: true, force: true });
  }
}
