import { Trash2 } from "lucide-react";

export default function SavedCard({
  id,
  thumbnail,
  title,
  type,
  url,
  onRemove,
}) {
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
        <div className="absolute bottom-0 left-0 right-0 h-14 sm:h-20 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

        {/* Remove Button */}
        <button
          onClick={onRemove}
          className="absolute top-2 right-2 sm:top-3 sm:right-3 bg-red-500 hover:bg-red-600 text-white px-3 py-2 rounded-full shadow-lg transition-all duration-300 flex items-center gap-1"
        >
          <Trash2 className="w-4 h-4" />
          <span className="hidden sm:block text-xs font-medium">Remove</span>
        </button>
      </div>

      {/* Content */}
      <div className="p-2 sm:p-2.5">
        {/* Title */}
          <h3 className="font-semibold text-gray-800 text-sm sm:text-base leading-5 sm:leading-6 line-clamp-2">
            {title}
          </h3>
       
      </div>
    </div>
  );
}
