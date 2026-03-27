import { searchAppleMusic } from "../lib/appleMusic.js";
import { getYouTubeAudio } from "../lib/youtube.js";

export default async function handler(req, res) {
  const { q } = req.query;
  if (!q) return res.status(400).json({ error: "No query" });

  const tracks = await searchAppleMusic(q);

  const results = [];
  for (let t of tracks.slice(0,5)) {
    const audio = await getYouTubeAudio(t.query) || t.preview;
    results.push({...t, audio});
  }

  res.json(results);
}
