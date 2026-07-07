import { User, Mail, Bookmark } from "lucide-react";
import { useSelector } from "react-redux";

export default function ProfileSidebar() {
  const { currUser } = useSelector((state) => state.users);

  return (
    <div className="bg-gradient-to-br from-red-500 to-pink-500 text-white px-6 py-10 sm:px-8 lg:px-8 flex flex-col items-center lg:items-center">
      <div className="w-28 h-28 sm:w-32 sm:h-32 lg:w-36 lg:h-36 rounded-full bg-white/20 border-4 border-white flex items-center justify-center shadow-xl">
        <User size={50} className="sm:w-14 sm:h-14 lg:w-16 lg:h-16" />
      </div>

      <h2 className="mt-5 text-2xl sm:text-3xl font-bold text-center break-words">
        {`Hi, ${currUser.name}!`}
      </h2>

      <p className="text-red-100 text-sm sm:text-base break-all text-center"></p>

      <div className="mt-8 w-full space-y-5">
        <div className="flex items-center gap-3">
          <Mail size={18} />

          <p className="text-sm break-all">{currUser.email}</p>
        </div>

        <div className="flex items-center gap-3">
          <Bookmark size={18} />

          <p className="text-sm">{currUser.collection.length} Saved Items</p>
        </div>
      </div>
    </div>
  );
}
