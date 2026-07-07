import { useDispatch } from "react-redux";
import { setQuery } from "../../features/searchSlice";
import { useNavigate } from "react-router";

const categories = [
  "Nature",
  "Technology",
  "Travel",
  "Food",
  "Cars",
  "Anime",
  "Coding",
  "Fashion",
  "Wallpaper",
  "Animals",
  "Space",
  "Mountains",
];

export default function CategoryChips() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <div className="px-4">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">
        Popular Categories
      </h2>

      <div className="flex flex-wrap gap-2 lg:gap-4">
        {categories.map((item) => (
          <button
            key={item}
            onClick={() => {
              dispatch(setQuery(item));
              navigate(`/home/search/${encodeURIComponent(item)}`);
            }}
            className="px-5 py-3  rounded-full bg-white border border-gray-200 font-medium text-gray-700 shadow-sm hover:bg-red-500 hover:text-white hover:border-red-500 hover:scale-105 transition"
          >
            {item}
          </button>
        ))}
      </div>
    </div>
  );
}
