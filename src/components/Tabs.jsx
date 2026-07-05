import { useDispatch, useSelector } from "react-redux";
import TabButton from "./TabButton";
import { useEffect } from "react";
import { setActiveTab } from "../features/searchSlice";

export default function Tabs() {
  const dispatch = useDispatch();
  const { activeTab } = useSelector((state) => state.search);
  return (
    <div className="w-full flex justify-center pt-32 md:pt-20 lg:pt-20 px-4 sm:px-4 lg:px-8 ">
      <div className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-md rounded-full p-1 flex shadow-sm bg-white">
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
  );
}
