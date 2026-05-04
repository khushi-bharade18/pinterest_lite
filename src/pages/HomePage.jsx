import { useState } from "react";
import { getPhotos, getStickers } from "../api/mediaApi";
import Navbar from "../components/Navbar";
import ResultGrid from "../components/ResultGrid";

export default function HomePage() {
  const [activePage, setActivePage] = useState("home");
  return (
    <div>
      <Navbar activePage={activePage} setActivePage={setActivePage} />
      {/* <ResultGrid /> */}
      {/* <button
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
      </button> */}
    </div>
  );
}
