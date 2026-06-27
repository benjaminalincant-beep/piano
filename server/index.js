import express from "express";
import multer from "multer";
import { randomUUID } from "node:crypto";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";
import { convertScore } from "./omr.js";

const app = express();
const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const upload = multer({
  storage: multer.memoryStorage(),
  limits: { files: 1, fileSize: 20 * 1024 * 1024 },
  fileFilter: (_request, file, done) => {
    const pdf = file.mimetype === "application/pdf" || file.originalname.toLowerCase().endsWith(".pdf");
    done(pdf ? null : new Error("Seuls les fichiers PDF sont acceptés."), pdf);
  },
});

app.disable("x-powered-by");
app.use(express.static(root, { extensions: ["html"], maxAge: "1h" }));

app.get("/api/health", (_request, response) => response.json({ ok: true }));
app.post("/api/score-to-level", upload.single("score"), async (request, response) => {
  const requestId = randomUUID();
  try {
    if (!request.file) return response.status(400).json({ error: "Partition PDF manquante.", requestId });
    if (request.file.buffer.subarray(0, 5).toString("ascii") !== "%PDF-") {
      return response.status(415).json({ error: "Le contenu du fichier n’est pas un PDF valide.", requestId });
    }
    const result = await convertScore(request.file.buffer, request.file.originalname);
    response.json({ ...result, requestId });
  } catch (error) {
    console.error(`[${requestId}] score conversion failed`, error);
    response.status(422).json({
      error: error.message || "La partition n’a pas pu être reconnue.",
      requestId,
    });
  }
});

app.use((error, _request, response, _next) => {
  const tooLarge = error?.code === "LIMIT_FILE_SIZE";
  response.status(tooLarge ? 413 : 400).json({
    error: tooLarge ? "Le PDF dépasse la limite de 20 Mo." : error.message || "Fichier invalide.",
  });
});

const port = Number(process.env.PORT) || 3000;
app.listen(port, () => console.log(`Jazz Keys listening on http://0.0.0.0:${port}`));
