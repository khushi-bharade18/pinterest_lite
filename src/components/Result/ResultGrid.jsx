import { useEffect } from "react";
import ResultCard from "./ResultCard";
import { useDispatch, useSelector } from "react-redux";
import { getPhotos, getStickers } from "../../api/mediaApi";
import { setResults, setError, setLoading } from "../../features/searchSlice";
import ErrorState from "./ErrorState";
import EmptyResult from "./EmptyResult";
import SkeletonGrid from "./SkeletonGrid";

export default function ResultGrid() {
  const dispatch = useDispatch();
  const { query, activeTab, error, results, loading } = useSelector(
    (state) => state.search,
  );

  async function fetchResults() {
    try {
      dispatch(setLoading(true));
      dispatch(setError(null));
      let data;
      if (activeTab === "photos") {
        data = await getPhotos(query);
      } else if (activeTab === "stickers") {
        data = await getStickers(query);
      }
      dispatch(setResults(data));
    } catch (err) {
      dispatch(setError(err.message));
      dispatch(setResults([]));
    } finally {
      dispatch(setLoading(false));
    }
  }

  useEffect(() => {
    if (query) {
      fetchResults();
    }
  }, [query, activeTab, dispatch]);

  if (loading) {
    return <SkeletonGrid />;
  }

  if (error) {
    return <ErrorState error={error} retry={fetchResults} />;
  }

  if (!loading && results.length === 0) {
    return <EmptyResult query={query} />;
  }

  return (
    <div className="w-full px-4 py-6">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 sm:gap-4 lg:gap-6">
        {results.map((item) => (
          <div key={item.id} className="animate-[fadeUp_.6s_ease]">
            <ResultCard {...item} />
          </div>
        ))}
      </div>
    </div>
  );
}
