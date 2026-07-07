import { useSelector } from "react-redux";
import ResultGrid from "../components/Result/ResultGrid";
import SearchTabs from "../components/SearchTabs";
import HomeLanding from "../components/Hero_section/HomeLanding";

export default function HomePage() {
  const { query } = useSelector((state) => state.search);
  return (
    <div className="min-h-screen bg-gray-100">
      <SearchTabs />
      {query ? <ResultGrid /> : <HomeLanding />}
    </div>
  );
}
