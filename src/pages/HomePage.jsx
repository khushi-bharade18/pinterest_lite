import { useState } from "react";
import { getPhotos, getStickers } from "../api/mediaApi";
import Navbar from "../components/Navbar";
import ResultGrid from "../components/ResultGrid";
import Tabs from "../components/Tabs";
import { Save } from "lucide-react";
import SavedPage from "./SavedPage";

export default function HomePage() {
  const [activePage, setActivePage] = useState("home");
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar activePage={activePage} setActivePage={setActivePage} />
      {activePage === "home" && (
        <section>
          <Tabs />
          <ResultGrid />
        </section>
      )}
      {activePage === "saved" && (
        <section>
          <SavedPage />
        </section>
      )}
    </div>
  );
}
