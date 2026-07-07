import BackgroundShapes from "./BackgroundShapes";
import { Sparkles } from "lucide-react";

export default function LoginHero() {
  return (
    <div className="relative hidden lg:flex flex-1 min-h-[700px] overflow-hidden rounded-l-[40px] bg-gradient-to-br from-red-50 via-pink-50 to-white">
      {/* Background Animation */}
      <BackgroundShapes />

      {/* Content */}
      <div className="relative z-20 flex flex-col justify-center h-full px-16">
        {/* Logo */}
        <div className="flex items-center gap-3 ">
          <div className="w-16 h-16 rounded-full bg-red-500 flex items-center justify-center shadow-xl">
            <img
              src="pinterest_logo.webp"
              alt=""
              className="w-8 h-8 object-contain"
            />
          </div>

          <div>
            <h2 className="text-3xl font-black text-red-500">Pinterest</h2>

            <p className="text-gray-500">Lite</p>
          </div>
        </div>

        <h1 className="mt-8 text-6xl font-black leading-tight text-gray-900">
          Discover
          <span className="block text-red-500">Millions of Ideas</span>
        </h1>

        <p className="mt-6 text-lg leading-8 text-gray-600 max-w-lg">
          Save inspiring photos, discover creative stickers, organize your
          collections and explore ideas from around the world.
        </p>

        <div className="flex gap-5 mt-10">
          <div className="bg-white rounded-2xl px-5 py-4 shadow-xl">
            <h3 className="text-3xl font-bold text-red-500">50M+</h3>

            <p className="text-gray-500 text-sm">Creative Pins</p>
          </div>

          <div className="bg-white rounded-2xl px-5 py-4 shadow-xl">
            <h3 className="text-3xl font-bold text-red-500">120K+</h3>

            <p className="text-gray-500 text-sm">Active Users</p>
          </div>
        </div>
      </div>
    </div>
  );
}
