/**
 * Stub image fetcher: returns placeholder URLs or local images.
 */
async function fetchImageFor(query){
  // In production, integrate with Unsplash or other image APIs
  return `https://source.unsplash.com/featured/?${encodeURIComponent(query)}`;
}
module.exports = { fetchImageFor };
