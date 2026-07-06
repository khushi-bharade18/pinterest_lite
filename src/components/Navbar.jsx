import { useState } from "react";
import SearchBar from "./SearchBar";
import { Home, Bookmark, User, Menu, X } from "lucide-react";
import { useSelector } from "react-redux";
import { Link } from "react-router";

export default function Navbar({ activePage, setActivePage }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const { currUser } = useSelector((state) => state.users);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-red-50 backdrop-blur-md ">
      <div className=" mx-auto px-4 sm:px-6 lg:px-8 py-3">
        {/* Top Row */}
        <div className="flex items-center justify-between gap-4">
          {/* Logo */}
          <button className="flex items-center gap-2 shrink-0 group">
            <div className="w-10 h-10 bg-red-500 rounded-full flex items-center justify-center overflow-hidden shadow-sm transition-all duration-200 group-hover:bg-red-600 group-hover:scale-105">
              <img
                src="pinterest_logo.webp"
                alt="Pinterest Logo"
                className="w-6 h-6 object-contain"
              />
            </div>

            <span className="flex items-center text-red-500 font-bold text-base sm:text-lg tracking-tight">
              Pinterest
              <span className="text-gray-400 font-medium text-sm ml-1">
                lite
              </span>
            </span>
          </button>

          {/* Desktop Right Side */}
          <div className="hidden md:flex items-center gap-3">
            {/* Home */}
            <Link to="/home">
              <button
                onClick={() => setActivePage("home")}
                className={`flex flex-col items-center px-3 py-2 rounded-xl text-xs font-medium transition-all ${
                  activePage === "home"
                    ? "bg-gray-900 text-white"
                    : "text-gray-500 hover:bg-white hover:text-gray-900"
                }`}
              >
                <Home size={18} />
                <span>Home</span>
              </button>
            </Link>
            {/* Saved */}
            <Link to="/home/saved">
              <button
                onClick={() => setActivePage("saved")}
                className={`flex flex-col items-center px-3 py-2 rounded-xl text-xs font-medium transition-all ${
                  activePage === "saved"
                    ? "bg-gray-900 text-white"
                    : "text-gray-500 hover:bg-white hover:text-gray-900"
                }`}
              >
                <Bookmark size={18} />
                <span>Saved</span>
              </button>
            </Link>
            {/* User Info */}
            <div className="text-right leading-tight hidden lg:flex flex-col">
              <span className="text-sm font-semibold text-gray-800">
                {currUser ? currUser.name : "Guest User"}
              </span>
              <span className="text-xs text-gray-500 truncate max-w-[180px]">
                {currUser ? currUser.email : "guest@email.com"}
              </span>
            </div>

            {/* Profile */}
            <Link
              to="/home/profile"
              className="w-10 h-10 rounded-full bg-gradient-to-br from-pink-500 to-red-500 flex items-center justify-center shadow-sm hover:shadow-md hover:scale-105 transition-all duration-200"
            >
              <User size={18} className="text-white" />
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden w-10 h-10 rounded-lg flex items-center justify-center hover:bg-gray-100"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden mt-4 border-t border-gray-200 pt-4 space-y-3">
            <Link to="/home">
              <button
                onClick={() => {
                  setActivePage("home");
                  setMenuOpen(false);
                }}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium ${
                  activePage === "home"
                    ? "bg-gray-900 text-white"
                    : "text-gray-700 hover:bg-gray-100"
                }`}
              >
                <Home size={18} />
                Home
              </button>
            </Link>

            <Link to="/home/saved">
              <button
                onClick={() => {
                  setActivePage("saved");
                  setMenuOpen(false);
                }}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium ${
                  activePage === "saved"
                    ? "bg-gray-900 text-white"
                    : "text-gray-700 hover:bg-gray-100"
                }`}
              >
                <Bookmark size={18} />
                Saved
              </button>
            </Link>
            {/* User */}
            <div className="flex items-center gap-3 px-2 pt-2">
              <Link to="/home/profile">
                <button
                  onClick={() => setMenuOpen(false)}
                  className="w-10 h-10 rounded-full bg-gradient-to-br from-pink-500 to-red-500 flex items-center justify-center shadow-sm hover:shadow-md hover:scale-105 transition-all duration-200"
                >
                  <User size={18} className="text-white" />
                </button>
              </Link>

              <div>
                <p className="text-sm font-semibold text-gray-800">
                  {currUser ? currUser.name : "Guest User"}
                </p>
                <p className="text-xs text-gray-500">
                  {currUser ? currUser.email : "guest@email.com"}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
