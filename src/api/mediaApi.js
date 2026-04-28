import axios from "axios";

const UNSPLASH_KEY = import.meta.env.VITE_UNSPLASH_KEY;
const GIPHY_KEY = import.meta.env.VITE_GIPHY_KEY;

export async function getPhotos(query, per_page = 20) {
  const response = await axios.get("https://api.unsplash.com/search/photos", {
    params: { query, per_page },
    headers: { Authorization: `Client-ID ${UNSPLASH_KEY}` },
  });
  return response.data.results.map((item) => ({
    id: item.id,
    type: "photo",
    thumbnail: item.urls.thumb,
    url: item.links.html,
    title: item.alt_description,
  }));
}

export async function getStickers(q, api_key = GIPHY_KEY, limit = 20) {
  const response = await axios.get("https://api.giphy.com/v1/stickers/search", {
    params: { q, api_key, limit },
  });
  return response.data.data.map((item) => ({
    id: item.id,
    type: "sticker",
    thumbnail: item.images.downsized_medium.url,
    url: item.url,
    title: item.title,
  }));
}
