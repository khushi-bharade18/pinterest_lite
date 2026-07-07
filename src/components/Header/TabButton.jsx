export default function TabButton({ active, children, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`flex-1 rounded-full py-2 px-3 text-xs sm:text-sm lg:text-base font-semibold transition-all duration-300
        ${
          active
            ? "bg-black text-white shadow-md"
            : "text-gray-600 hover:bg-white"
        }
      `}
    >
      {children}
    </button>
  );
}
