export async function searchAppleMusic(query) {
  const res = await fetch(`https://itunes.apple.com/search?term=${encodeURIComponent(query)}&entity=song`);
  const data = await res.json();

  return data.results.map(track => ({
    title: track.trackName,
    artist: track.artistName,
    cover: track.artworkUrl100.replace("100x100","500x500"),
    preview: track.previewUrl,
    query: track.trackName + " " + track.artistName
  }));
}
