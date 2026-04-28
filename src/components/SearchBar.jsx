import { Search, X } from "lucide-react";
// import { useSelector } from "react-redux";

export default function SearchBar() {
  //   const { query } = useSelector((state) => state.search.query);
  return (
    <div className="relative flex-1">
      <form>
        <div className="w-full flex items-center bg-gray-100 rounded-full px-4 py-2 gap-2 hover:bg-gray-200 transition-colors focus-within:ring-2 focus-within:ring-red-400 focus-within:bg-white focus-within:shadow-md">
          <Search size={16} className="text-gray-500 shrink-0" />
          <input
            type="text"
            placeholder="Search pins, ideas, boards..."
            // value={value}
            // onChange={(e) => onChange(e.target.value)}
            className="bg-transparent outline-none text-sm text-gray-800 w-full placeholder-gray-400"
          />
          {/* {value && ( */}
          <button
            //   onClick={onClear}
            className="text-gray-400 hover:text-gray-800 transition-colors"
          >
            <X size={14} />
          </button>
          {/* )} */}
          <button type="submit" className="flex flex-col md:flex-row items-center gap-1 px-4 py-2.5 rounded-full text-sm font-medium text-white bg-red-500 hover:bg-red-700 active:scale-95 transition-all duration-200">Search</button>
        </div>
      </form>
    </div>
  );
}
