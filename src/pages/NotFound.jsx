import { Link } from "react-router";
import { Home, LogIn, User } from "lucide-react";

export default function NotFound() {
  return (
    <div className="relative overflow-hidden min-h-screen bg-gradient-to-br from-red-50 via-white to-pink-100 flex items-center justify-center px-4">
      {/* Background Blobs */}
      <div className="absolute w-80 h-80 bg-red-200 rounded-full blur-3xl opacity-30 -top-24 -left-24 animate-pulse"></div>
      <div className="absolute w-96 h-96 bg-pink-200 rounded-full blur-3xl opacity-30 bottom-0 right-0 animate-pulse"></div>
      <div className="absolute w-52 h-52 bg-red-300 rounded-full blur-2xl opacity-20 top-1/2 left-1/4 animate-bounce"></div>
      {/* Card */}
      <div className="relative z-10 max-w-4xl w-full rounded-3xl  backdrop-blur-xl  border border-white/40 p-8 md:p-12">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          {/* LEFT */}

          <div className="flex justify-center">
            <div className="relative">
              {/* Floating Avatar */}

              <div
                className="
                w-52
                h-52
                

                rounded-full

                bg-gradient-to-br
                from-red-500
                to-pink-500

                shadow-2xl

                flex
                items-center
                justify-center

                animate-[float_4s_ease-in-out_infinite]
                "
              >
                <div className="w-52 h-52 rounded-full bg-gradient-to-br from-red-500 to-pink-500 flex items-center justify-center shadow-2xl animate-[float_4s_ease-in-out_infinite]">
                  <User size={120} className="text-white" />
                </div>
              </div>

              {/* Floating Emoji */}

              <div className="absolute -top-2 -right-3 text-4xl animate-bounce">
                😵
              </div>

              <div className="absolute bottom-2 -left-5 text-3xl animate-pulse">
                ❓
              </div>
            </div>
          </div>

          {/* RIGHT */}

          <div className="text-center lg:text-left">
            <h1 className="text-7xl md:text-8xl font-black text-red-500 drop-shadow-lg animate-pulse">
              404
            </h1>

            <h2 className="mt-4 text-3xl md:text-4xl font-bold text-gray-800">
              Oops! Lost in Pinterest?
            </h2>

            <p className="mt-4 text-gray-600 leading-7">
              Looks like the page you're trying to visit doesn't exist. Maybe it
              was removed, renamed or never existed.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Link
                to="/home"
                className="flex-1 flex items-center justify-center gap-2 rounded-xl bg-red-500 py-3 text-white font-semibold shadow-lg hover:bg-red-600 hover:scale-105 transition duration-300"
              >
                <Home size={20} />
                Back to Home
              </Link>

              <Link
                to="/"
                className="flex-1 flex items-center justify-center gap-2 rounded-xl border border-gray-300 py-3 font-semibold text-gray-700 hover:bg-gray-100 hover:scale-105 transition duration-300"
              >
                <LogIn size={20} />
                Login
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
