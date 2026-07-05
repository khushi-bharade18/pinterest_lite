export default function TabButton({ active, children, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`
        flex-1 rounded-full py-2 text-sm md:text-sm font-semibold
        transition-all duration-200
        ${
          active
            ? "bg-black text-white shadow-md"
            : "text-gray-600"
        }
      `}
    >
      {children}
    </button>
  );
}
