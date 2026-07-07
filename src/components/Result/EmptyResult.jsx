import { SearchX } from "lucide-react";
import { useEffect } from "react";

export default function EmptyResult({ query }) {
  return (
    <div className="flex flex-col items-center justify-center text-center py-24 px-6">
      <div className="w-24 h-24 rounded-full bg-red-50 flex items-center justify-center animate-bounce">
        <SearchX size={42} className="text-red-500" />
      </div>

      <h2 className="mt-8 text-3xl font-bold text-gray-800">
        No Results Found
      </h2>

      <p className="mt-3 max-w-md text-gray-500 leading-relaxed">
        We couldn't find anything related to
      </p>

      <span className="mt-2 text-red-500 font-semibold text-lg">"{query}"</span>

      <p className="mt-5 text-gray-400">
        Try another keyword or explore something different.
      </p>
    </div>
  );
}
