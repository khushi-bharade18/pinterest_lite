import { TriangleAlert, RotateCcw } from "lucide-react";

export default function ErrorState({ error, retry }) {
  return (
    <div className="flex flex-col items-center justify-center text-center py-24 px-6">
      <div className="w-24 h-24 rounded-full bg-red-100 flex items-center justify-center animate-pulse">
        <TriangleAlert size={42} className="text-red-600" />
      </div>

      <h2 className="mt-8 text-3xl font-bold text-gray-800">
        Something went wrong
      </h2>

      <p className="mt-4 text-gray-500 max-w-md">
        {error || "Unable to load results."}
      </p>

      <button
        onClick={retry}
        className="mt-8 flex items-center gap-2 bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-full font-medium transition-all hover:scale-105"
      >
        <RotateCcw size={18} />
        Try Again
      </button>
    </div>
  );
}
