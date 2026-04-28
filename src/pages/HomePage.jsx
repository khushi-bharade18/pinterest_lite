import { getPhotos, getStickers } from "../api/mediaApi";
import Navbar from "../components/Navbar";

export default function HomePage() {
  return (
    <div>
      <Navbar />
      <button
        onClick={async () => {
          const result = await getPhotos("cat");
          console.log(result);
        }}
      >
        Get photos
      </button>

      <button
        onClick={async () => {
          const result = await getStickers("modi");
          console.log(result);
        }}
      >
        Get Stickers
      </button>
    </div>
  );
}
