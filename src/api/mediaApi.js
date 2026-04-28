import axios from "axios";

const UNSPLASH_KEY = import.meta.env.VITE_UNSPLASH_KEY;
const GIPHY_KEY = import.meta.env.VITE_GIPHY_KEY;

export async function getPhotos(query, per_page = 20) {
  const response = await axios.get("https://api.unsplash.com/search/photos", {
    params: { query, per_page },
    headers: { Authorization: `Client-ID ${UNSPLASH_KEY}` },
  });
  console.log(response.data.results);
}

export async function getStickers(q, api_key = GIPHY_KEY, limit = 20) {
  const response = await axios.get("https://api.giphy.com/v1/stickers/search", {
    params: { q, api_key, limit },
  });
  console.log(response.data.data);
}
