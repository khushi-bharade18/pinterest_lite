import { useDispatch, useSelector } from "react-redux";
import SearchBar from "./SearchBar";
import TabButton from "./TabButton";
import { setActiveTab } from "../features/searchSlice";

export default function SearchTabs() {
  const dispatch = useDispatch();
  const { activeTab } = useSelector((state) => state.search);

  return (
    <div className="mt-18 w-full bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
        <div className="flex items-center gap-3 flex-col sm:flex-row">
          {/* Search Bar */}
          <div className="flex-1 w-full">
            <SearchBar />
          </div>

          {/* Tabs */}
          <div
            className="
              flex
              items-center
              bg-gray-100
              rounded-full
              p-1
              shadow-sm
              shrink-0

              w-full
              sm:w-auto

              sm:min-w-[180px]
              md:min-w-[200px]
              lg:min-w-[220px]
            "
          >
            <TabButton
              active={activeTab === "photos"}
              onClick={() => dispatch(setActiveTab("photos"))}
            >
              Photos
            </TabButton>

            <TabButton
              active={activeTab === "stickers"}
              onClick={() => dispatch(setActiveTab("stickers"))}
            >
              Stickers
            </TabButton>
          </div>
        </div>
      </div>
    </div>
  );
}
