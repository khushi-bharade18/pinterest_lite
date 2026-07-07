import { Sparkles } from "lucide-react";
import { useSelector } from "react-redux";
import HeroAnimation from "./HeroAnimation";

export default function WelcomeHero() {
  const { currUser } = useSelector((state) => state.users);

  return (
    <div
      className="
      relative
      overflow-hidden

      rounded-b-3xl

      bg-gradient-to-r
      from-red-500
      via-pink-500
      to-red-400

      p-6
      sm:p-8
      lg:p-12

      text-white

      shadow-2xl
      "
    >
      {/* Background */}

      <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-white/10 blur-2xl"></div>

      <div className="absolute bottom-0 left-0 w-52 h-52 rounded-full bg-white/10 blur-3xl"></div>

      <div className="relative z-10 grid lg:grid-cols-2 gap-10 items-center">
        <div className="relative z-10">
          <div className="inline-flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full">
            <Sparkles size={18} />

            <span className="text-sm">Pinterest Lite</span>
          </div>

          <h1
            className="
          mt-6

          text-3xl
          sm:text-5xl
          lg:text-6xl

          font-black

          leading-tight
          "
          >
            Welcome Back,
            <br />
            {currUser?.name || "Guest"} !
          </h1>

          <p
            className="
          mt-5

          max-w-2xl

          text-sm
          sm:text-lg

          text-red-50
          "
          >
            Discover millions of beautiful photos and creative stickers. Search
            anything.
          </p>
        </div>
        <HeroAnimation/>
      </div>
    </div>
  );
}
