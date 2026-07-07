import { useDispatch, useSelector } from "react-redux";
import ResultGrid from "../components/Result/ResultGrid";
import SearchTabs from "../components/Header/SearchTabs";
import HomeLanding from "../components/Hero_section/HomeLanding";
import { setQuery } from "../features/searchSlice";
import { useEffect } from "react";
import { useParams } from "react-router";

export default function HomePage() {
  const { query } = useSelector((state) => state.search);

  const { query: queryParam } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    if (queryParam) {
      dispatch(setQuery(queryParam));
    } else {
      dispatch(setQuery(""));
    }
  }, [queryParam, dispatch]);

  return (
    <div className="min-h-screen bg-gray-100">
      <SearchTabs />
      {query ? <ResultGrid /> : <HomeLanding />}
    </div>
  );
}
