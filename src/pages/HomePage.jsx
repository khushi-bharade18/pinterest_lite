import ResultGrid from "../components/ResultGrid";
import SearchTabs from "../components/SearchTabs";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-100">
      <SearchTabs />
      <ResultGrid />
    </div>
  );
}
