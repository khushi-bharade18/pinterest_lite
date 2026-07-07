import { useDispatch, useSelector } from "react-redux";
import SavedCard from "../components/Saved/SavedCard";
import { removeFromCollection } from "../features/usersSlice";
import toast from "react-hot-toast";

export default function SavedPage() {
  const dispatch = useDispatch();

  const { currUser } = useSelector((state) => state.users);

  const savedItems = currUser?.collection || [];

  function handleRemove(id) {
    dispatch(removeFromCollection(id));
    toast.success("Removed");
  }

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-white via-red-50 to-pink-50 pt-24 pb-10">
      {/* Background Blur */}

      <div className="absolute -top-32 -left-20 w-72 h-72 bg-red-300/20 rounded-full blur-[120px]" />

      <div className="absolute bottom-0 right-0 w-96 h-96 bg-pink-300/20 rounded-full blur-[140px]" />

      <div className="relative mx-auto px-4">
        {/* Header */}

        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-5 mb-10">
          <div>
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-800">
              Your Collection
            </h1>

            <p className="mt-2 text-gray-500">
              Your favourite inspirations in one place.
            </p>
          </div>

          <div className="bg-white/80 backdrop-blur-xl border border-gray-200 rounded-2xl shadow-md px-6 py-4">
            <h3 className="text-sm text-gray-500">Total Saved</h3>

            <p className="text-3xl font-bold text-red-500">
              {savedItems.length}
            </p>
          </div>
        </div>

        {/* Empty */}

        {savedItems.length === 0 ? (
          <div className="relative flex flex-col items-center justify-center text-center py-28">
            {/* Floating Cards */}

            <div className="absolute left-[15%] top-24 hidden md:block animate-bounce">
              <div className="w-20 h-28 rounded-2xl bg-white shadow-xl rotate-[-15deg]" />
            </div>

            <div
              className="absolute right-[15%] top-32 hidden md:block animate-bounce"
              style={{
                animationDelay: ".5s",
              }}
            >
              <div className="w-20 h-28 rounded-2xl bg-red-100 shadow-xl rotate-[12deg]" />
            </div>

            <div
              className="absolute left-[28%] bottom-16 hidden lg:block animate-bounce"
              style={{
                animationDelay: "1s",
              }}
            >
              <div className="w-16 h-24 rounded-xl bg-pink-100 shadow-lg rotate-[18deg]" />
            </div>

            {/* Big Icon */}

            <div className="w-32 h-32 rounded-full bg-white shadow-2xl flex items-center justify-center animate-pulse">
              <svg
                className="w-16 h-16 text-red-500"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.7"
                viewBox="0 0 24 24"
              >
                <path d="M6 4h12v16l-6-4-6 4V4z" />
              </svg>
            </div>

            <h2 className="mt-8 text-3xl font-bold text-gray-800">
              Nothing Saved Yet
            </h2>

            <p className="mt-3 max-w-lg text-gray-500 leading-relaxed">
              Save your favourite photos and stickers to build your own
              Pinterest collection. Everything you save will appear here.
            </p>

            <button className="mt-8 rounded-full bg-red-500 hover:bg-red-600 transition px-8 py-3 text-white font-semibold shadow-lg hover:scale-105">
              Start Exploring
            </button>
          </div>
        ) : (
          <>
            {/* Collection Grid */}

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 lg:gap-6">
              {savedItems.map((item) => (
                <div key={item.id} className="animate-[fadeUp_.6s_ease]">
                  <SavedCard {...item} onRemove={() => handleRemove(item.id)} />
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}
