export default function TabButton({ active, children, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`flex-1 rounded-full py-2 text-[10px] sm:text-xs md:text-sm lg:text-sm font-semibold transition-all duration-300
        ${
          active
            ? "bg-black text-white shadow"
            : "text-gray-600 hover:bg-gray-100"
        }
      `}
    >
      {children}
    </button>
  );
}
