import { Mail, Heart, ArrowUp, Globe } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative border-t border-gray-200 bg-gradient-to-br from-white via-red-50 to-pink-50 overflow-hidden">
      {/* Background Blur */}

      <div className="absolute -top-20 left-0 w-72 h-72 bg-red-300/20 rounded-full blur-[120px]" />

      <div className="absolute bottom-0 right-0 w-80 h-80 bg-pink-300/20 rounded-full blur-[140px]" />

      <div className="relative max-w-7xl mx-auto py-14 px-6 ">
        {/* Top */}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Logo */}

          <div>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-red-500 flex items-center justify-center shadow-lg">
                <img
                  src="/pinterest_logo.webp"
                  alt="Pinterest"
                  className="w-7"
                />
              </div>

              <div>
                <h2 className="text-2xl font-bold text-red-500">Pinterest</h2>

                <p className="text-xs text-gray-400 -mt-1">lite</p>
              </div>
            </div>

            <p className="mt-5 text-sm leading-7 text-gray-500">
              Discover millions of inspiring ideas, save your favourites and
              organize everything beautifully.
            </p>
          </div>

          {/* Explore */}

          <div>
            <h3 className="font-semibold text-gray-800 mb-5">Explore</h3>

            <ul className="space-y-3 text-gray-500">
              <li className="hover:text-red-500 cursor-pointer transition">
                Home
              </li>

              <li className="hover:text-red-500 cursor-pointer transition">
                Saved Collection
              </li>

              <li className="hover:text-red-500 cursor-pointer transition">
                User Profile
              </li>

              <li className="hover:text-red-500 cursor-pointer transition">
                Trending
              </li>
            </ul>
          </div>

          {/* Resources */}

          <div>
            <h3 className="font-semibold text-gray-800 mb-5">Resources</h3>

            <ul className="space-y-3 text-gray-500">
              <li className="hover:text-red-500 cursor-pointer transition">
                About
              </li>

              <li className="hover:text-red-500 cursor-pointer transition">
                Privacy
              </li>

              <li className="hover:text-red-500 cursor-pointer transition">
                Terms
              </li>

              <li className="hover:text-red-500 cursor-pointer transition">
                Support
              </li>
            </ul>
          </div>

          {/* Contact */}

          <div>
            <h3 className="font-semibold text-gray-800 mb-5">Connect</h3>

            <div className="space-y-4">
              <button className="flex items-center gap-3 text-gray-500 hover:text-red-500 transition">
                <Mail size={18} />

                <span>Email</span>
              </button>

              <button className="flex items-center gap-3 text-gray-500 hover:text-red-500 transition">
                <Globe size={18} />

                <span>Linkedin</span>
              </button>
            </div>
          </div>
        </div>

        {/* Divider */}

        <div className="my-10 border-t border-gray-200" />

        {/* Bottom */}

        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-sm text-gray-500 text-center">
            © {new Date().getFullYear()} Pinterest Lite. Made with{" "}
            <Heart
              size={16}
              className="inline text-red-500 fill-red-500 animate-pulse"
            />{" "}
            using React & Redux.
          </p>

          <button
            onClick={() =>
              window.scrollTo({
                top: 0,
                behavior: "smooth",
              })
            }
            className="flex items-center gap-2 rounded-full bg-white px-5 py-2.5 shadow-lg hover:shadow-xl hover:-translate-y-1 transition"
          >
            <ArrowUp size={18} />
            Back to Top
          </button>
        </div>
      </div>
    </footer>
  );
}
