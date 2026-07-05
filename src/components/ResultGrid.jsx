import { useEffect } from "react";
import ResultCard from "./ResultCard";
import { useDispatch, useSelector } from "react-redux";
import { getPhotos, getStickers } from "../api/mediaApi";

export default function ResultGrid() {
  const dispatch = useDispatch();
  const { query } = useSelector((state) => state.search);
  useEffect(() => {
    async () => {
      const result = await getPhotos(query);
      dispatch(query)
      console.log(result);
    };
    console.log(query)
  }, [dispatch]);
  return (
    <div className="w-full px-4 py-6">
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {/* {results.map((item) => (
          <ResultCard
            key={item.id}
            image={item.image}
            title={item.title}
            description={item.description}
          />
        ))} */}
      </div>
    </div>
  );
}
