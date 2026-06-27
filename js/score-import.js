const MAX_FILE_SIZE = 20 * 1024 * 1024;

function assertPdf(file) {
  if (!file) throw new Error("Choisis une partition PDF.");
  const isPdf = file.type === "application/pdf" || file.name.toLowerCase().endsWith(".pdf");
  if (!isPdf) throw new Error("Ce fichier n’est pas un PDF.");
  if (file.size > MAX_FILE_SIZE) throw new Error("Le PDF dépasse la limite de 20 Mo.");
}

function normalizeEvent(event, index) {
  const beat = Number(event.beat);
  const chord = event.chord;
  if (!Number.isFinite(beat) || !chord) {
    throw new Error(`Note invalide à la position ${index + 1}.`);
  }
  if (Array.isArray(chord)) return { beat, chord };
  if (!chord.root || !chord.quality) {
    throw new Error(`Note incomplète à la position ${index + 1}.`);
  }
  return {
    beat,
    chord: {
      root: String(chord.root),
      quality: String(chord.quality),
      octave: Number.isFinite(Number(chord.octave)) ? Number(chord.octave) : 4,
    },
  };
}

function normalizeLevel(payload, fileName) {
  const source = payload.level || payload;
  const events = Array.isArray(source.events) ? source.events.map(normalizeEvent) : [];
  if (!events.length) throw new Error("Aucune note jouable n’a été détectée.");
  return {
    name: source.name || fileName.replace(/\.pdf$/i, ""),
    bpm: Math.min(240, Math.max(30, Number(source.bpm) || 90)),
    lives: Math.min(10, Math.max(1, Number(source.lives) || 5)),
    lookahead: Math.min(6000, Math.max(1200, Number(source.lookahead) || 3000)),
    key: source.key || "C",
    events,
  };
}

export class ScoreImporter {
  constructor({ endpoint = window.JAZZ_KEYS_OMR_ENDPOINT || "/api/score-to-level" } = {}) {
    this.endpoint = endpoint;
  }

  validate(file) {
    assertPdf(file);
    return file;
  }

  async convert(file, onProgress = () => {}) {
    this.validate(file);
    const form = new FormData();
    form.append("score", file, file.name);
    onProgress({ percent: 12, message: "Envoi de la partition…" });

    let response;
    try {
      response = await fetch(this.endpoint, { method: "POST", body: form });
    } catch {
      throw new Error("Le moteur de reconnaissance est indisponible. Réessaie dans un instant.");
    }

    onProgress({ percent: 55, message: "Reconnaissance des portées et des notes…" });
    if (!response.ok) {
      if (response.status === 404) {
        throw new Error("Le moteur PDF → MIDI n’est pas encore configuré sur ce déploiement.");
      }
      let message = "";
      try {
        const body = await response.json();
        message = body.error || body.message || "";
      } catch {
        // The service may return an empty or non-JSON error response.
      }
      throw new Error(message || `La conversion a échoué (${response.status}).`);
    }

    onProgress({ percent: 82, message: "Préparation du mode Survie…" });
    const payload = await response.json();
    const level = normalizeLevel(payload, file.name);
    onProgress({ percent: 100, message: `${level.events.length} événements prêts.` });
    return level;
  }
}

export { MAX_FILE_SIZE };
