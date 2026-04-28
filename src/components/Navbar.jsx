import SearchBar from "./SearchBar";
import { Home, Bookmark, User } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200 px-4 md:px-6 py-3 shadow-sm">
      <div className=" mx-auto flex items-center justify-between gap-4">
        {/* Left Side */}
        <div className="flex items-center gap-10 w-full">
          {/* Logo */}
          <button className="flex items-center gap-2 shrink-0 group">
            <div className="w-10 h-10 bg-red-500 rounded-full flex items-center justify-center overflow-hidden shadow-sm transition-all duration-200 group-hover:bg-red-600 group-hover:scale-105">
              <img
                src="pinterest_logo.webp"
                alt="Pinterest Logo"
                className="w-6 h-6 object-contain"
              />
            </div>

            <span className="hidden md:flex items-center text-red-500 font-bold text-lg tracking-tight">
              Pinterest
              <span className="text-gray-400 font-medium text-sm ml-1">
                lite
              </span>
            </span>
          </button>

          {/* Search */}
          <SearchBar />

          {/* Nav Tabs */}
          <div className="flex items-center gap-2">
            <button className="flex flex-col md:flex-row items-center gap-1 px-4 py-2 rounded-full text-sm font-medium text-gray-600 hover:bg-gray-100 hover:text-gray-900 transition-all duration-200">
              <Home size={18} />
              <span className="hidden md:block">Home</span>
            </button>

            <button className="flex flex-col md:flex-row items-center gap-1 px-4 py-2 rounded-full text-sm font-medium bg-gray-900 text-white hover:bg-gray-800 transition-all duration-200 shadow-sm">
              <Bookmark size={18} />
              <span className="hidden md:block">Saved</span>
            </button>
          </div>
        </div>

        {/* Right Side Profile */}
        <button className="w-10 h-10 rounded-full bg-gradient-to-br from-pink-500 to-red-500 flex items-center justify-center shadow-sm hover:shadow-md hover:scale-105 transition-all duration-200 shrink-0">
          <User size={18} className="text-white" />
        </button>
      </div>
    </nav>
  );
}
