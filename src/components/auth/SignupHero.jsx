import { CheckCircle2, Sparkles } from "lucide-react";
import BackgroundShapes from "./BackgroundShapes";

export default function SignupHero() {
  return (
    <div className="relative hidden lg:flex overflow-hidden rounded-l-[35px] bg-gradient-to-br from-red-50 via-pink-50 to-white">
      {/* Animated Background */}
      <BackgroundShapes />

      {/* Content */}
      <div className="relative z-20 flex flex-col justify-center px-16 py-5">
        {/* Logo */}

        <div className="flex items-center gap-4 mb-10">
          <div className="w-16 h-16 rounded-full bg-red-500 flex items-center justify-center shadow-xl">
            <img
              src="pinterest_logo.webp"
              alt="Pinterest"
              className="w-9 h-9"
            />
          </div>

          <div>
            <h2 className="text-3xl font-black text-red-500">Pinterest</h2>

            <p className="text-gray-500 font-medium">Lite</p>
          </div>
        </div>

        {/* Badge */}

        <div className="inline-flex items-center gap-2 bg-white shadow-lg rounded-full px-5 py-2 w-fit">
          <Sparkles size={18} className="text-red-500" />

          <span className="font-semibold text-gray-700">
            Start Your Journey
          </span>
        </div>

        {/* Heading */}

        <h1 className="mt-8 text-6xl leading-tight font-black text-gray-900">
          Create.
          <span className="block text-red-500">Save.</span>
        </h1>

        {/* Description */}

        <p className="mt-7 text-lg text-gray-600 leading-8 max-w-lg">
          Join thousands of creators who organize ideas, discover inspiration
          and save their favourite collections with Pinterest Lite.
        </p>

        {/* Features */}

        <div className="mt-10 space-y-5">
          <Feature text="Save unlimited photos & stickers" />

          <Feature text="Create beautiful collections" />

          <Feature text="Access your account anywhere" />
        </div>

        {/* Stats */}

        <div className="flex gap-5 mt-12">
          <Stat number="50M+" label="Creative Pins" />

          <Stat number="120K+" label="Users" />

          <Stat number="99%" label="Happy Members" />
        </div>
      </div>
    </div>
  );
}

function Feature({ text }) {
  return (
    <div className="flex items-center gap-3">
      <div className="w-9 h-9 rounded-full bg-red-100 flex items-center justify-center">
        <CheckCircle2 size={18} className="text-red-500" />
      </div>

      <span className="text-gray-700 font-medium">{text}</span>
    </div>
  );
}

function Stat({ number, label }) {
  return (
    <div className="bg-white rounded-2xl px-6 py-5 shadow-xl">
      <h3 className="text-3xl font-black text-red-500">{number}</h3>

      <p className="text-sm text-gray-500 mt-1">{label}</p>
    </div>
  );
}
