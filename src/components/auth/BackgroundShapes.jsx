export default function BackgroundShapes() {
  return (
    <>
      {/* Top Left Blob */}
      <div className="absolute -top-24 -left-24 w-80 h-80 rounded-full bg-red-300/30 blur-3xl animate-blob"></div>
      {/* Top Right Blob */}
      <div className="absolute top-20 right-0 w-96 h-96 rounded-full bg-pink-300/30 blur-3xl animate-blob animation-delay-2000"></div>
      {/* Bottom Blob */}
      <div className="absolute bottom-0 left-1/3 w-72 h-72 rounded-full bg-red-200/40 blur-3xl animate-blob animation-delay-4000"></div>
      {/* Small Floating Circles */}
      <div className="absolute top-20 left-20 w-5 h-5 rounded-full bg-red-500 animate-float"></div>
      <div className="absolute top-60 left-52 w-3 h-3 rounded-full bg-pink-500 animate-floatSlow"></div>
      <div className="absolute bottom-24 left-24 w-6 h-6 rounded-full bg-red-400 animate-float"></div>
      <div className="absolute bottom-52 right-60 w-4 h-4 rounded-full bg-pink-400 animate-floatSlow"></div>
      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.04]">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern
              id="grid"
              width="40"
              height="40"
              patternUnits="userSpaceOnUse"
            >
              <path d="M40 0H0V40" fill="none" stroke="#000" strokeWidth="1" />
            </pattern>
          </defs>

          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      {/* Floating Gradient Rings */}

      <div className="absolute top-32 right-40 w-36 h-36 rounded-full border-[14px] border-red-200/30 animate-spin-slow"></div>
      <div className="absolute bottom-32 left-12 w-28 h-28 rounded-full border-8 border-pink-200/40 animate-spin-reverse"></div>

      {/* Decorative Stars */}
      <div className="absolute top-40 left-1/2 text-red-400 text-xl animate-pulse">
        ✦
      </div>

      <div className="absolute bottom-40 right-20 text-pink-400 text-lg animate-pulse">
        ✦
      </div>

      <div className="absolute top-72 right-1/3 text-red-300 animate-pulse">
        ✦
      </div>

      {/* Large Transparent Circle */}
      <div className="absolute -bottom-32 -right-20 w-96 h-96 rounded-full border-[35px] border-white/20"></div>
    </>
  );
}
