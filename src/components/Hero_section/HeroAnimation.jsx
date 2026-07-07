export default function HeroAnimation() {
  return (
    <div className="relative hidden lg:flex items-center justify-center w-full h-[380px]">
      {/* Center Card */}
      <div className="absolute w-56 rounded-3xl bg-white shadow-2xl overflow-hidden animate-floatSlow rotate-3">
        <img
          src="../assets/hero_1.jpg"
          alt=""
          className="h-64 w-full object-cover"
        />

        <div className="p-4">
          <h3 className="font-bold text-gray-800">Travel Ideas</h3>
          <p className="text-sm text-gray-500">Explore beautiful places</p>
        </div>
      </div>

      {/* Left Floating Card */}
      <div className="absolute -left-2 top-8 w-36 rounded-2xl bg-white shadow-xl overflow-hidden animate-float -rotate-12">
        <img
          src="../assets/hero_2.jpg"
          alt=""
          className="h-28 w-full object-cover"
        />

        <div className="p-2 text-sm font-semibold text-gray-800">Nature</div>
      </div>

      {/* Right Floating Card */}
      <div className="absolute right-0 bottom-8 w-36 rounded-2xl bg-white shadow-xl overflow-hidden animate-float rotate-12">
        <img
          src="../assets/hero_3.jpg"
          alt=""
          className="h-28 w-full object-cover"
        />

        <div className="p-2 text-sm font-semibold text-gray-800">Coding</div>
      </div>

      {/* Like Bubble */}
      <div className="absolute top-3 right-12 bg-white rounded-full px-4 py-2 shadow-xl animate-bounce">
        ❤️ 12k
      </div>

      {/* Save Bubble */}
      <div className="absolute bottom-3 left-6 bg-red-500 text-white rounded-full px-4 py-2 shadow-xl animate-pulse">
        📌 Saved
      </div>

      {/* Decorative Circles */}
      <div className="absolute w-5 h-5 bg-red-400 rounded-full top-20 left-20 animate-ping"></div>

      <div className="absolute w-3 h-3 bg-pink-500 rounded-full bottom-20 right-10 animate-pulse"></div>
    </div>
  );
}
