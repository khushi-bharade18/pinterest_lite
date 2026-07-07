import { Bookmark } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { addToCollection } from "../../features/usersSlice";
import toast from "react-hot-toast";

export default function ResultCard({ id, thumbnail, title, type, url }) {
  const { currUser } = useSelector((state) => state.users);
  const dispatch = useDispatch();
  function handleSave(e) {
    e.stopPropagation();
    e.preventDefault();
    if (!currUser) {
      alert("Please log in to save items.");
      return;
    }
    const saved = currUser.collection.some((data) => data.id === id);

    if (saved) {
      toast.error("Already Saved");
      return;
    }

    toast.success("Saved");
    dispatch(addToCollection({ id, thumbnail, title, type, url }));
  }
  return (
    <div className="group relative overflow-hidden rounded bg-white border border-gray-200 shadow-sm hover:shadow-xl transition-all duration-300">
      {/* Image */}
      <div className="relative overflow-hidden">
        <a href={url} target="_blank" rel="noopener noreferrer">
          <img
            src={thumbnail}
            alt={title}
            className="w-full h-44 sm:h-52 md:h-60 lg:h-64 object-cover transition duration-500 group-hover:scale-105"
          />
        </a>

        {/* Gradient */}
        <div className="absolute bottom-0 left-0 right-0 h-14 sm:h-20 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>

        {/* Save Button */}
        <button
          className="absolute bottom-2 right-2 sm:bottom-3 sm:right-3 p-1.5 sm:p-2 bg-red-500 text-white hover:bg-red-600 p-2 rounded-full shadow-lg transition active:scale-90"
          onClick={(e) => handleSave(e)}
        >
          <Bookmark className="w-4 h-4 sm:w-[18px] sm:h-[18px]" />
        </button>
      </div>

      {/* Content */}
      <div className="p-2 sm:p-2.5">
        {/* Title */}
        <h3 className="font-semibold text-gray-800 text-sm leading-5 sm:leading-6 line-clamp-2 cursor-default">
          {title}
        </h3>
      </div>
    </div>
  );
}
