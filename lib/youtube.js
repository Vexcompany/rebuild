export async function getYouTubeAudio(query) {
  try {
    const res = await fetch(`https://api.vevioz.com/api/button/mp3/${encodeURIComponent(query)}`);
    const html = await res.text();
    const match = html.match(/href="(https:[^"]+\.mp3)"/);
    return match ? match[1] : null;
  } catch {
    return null;
  }
}
