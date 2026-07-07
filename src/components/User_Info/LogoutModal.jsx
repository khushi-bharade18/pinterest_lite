import { LogOut, X } from "lucide-react";

export default function LogoutModal({ onClose, onConfirm }) {
  return (
    <div className="fixed inset-0 z-[100] bg-black/40 backdrop-blur-sm flex items-center justify-center px-4">
      <div className="bg-white rounded-3xl shadow-xl w-full max-w-md p-7 animate-fadeIn">
        <div className="flex justify-center">
          <div className="w-16 h-16 rounded-full bg-red-100 flex items-center justify-center">
            <LogOut className="text-red-500" size={30} />
          </div>
        </div>

        <h2 className="mt-5 text-center text-2xl font-bold">Logout</h2>

        <p className="text-center text-gray-500 mt-2">
          Are you sure you want to logout?
        </p>

        <div className="flex gap-3 mt-8">
          <button
            onClick={onClose}
            className="flex-1 py-3 rounded-xl border border-gray-300 hover:bg-gray-100 transition"
          >
            Cancel
          </button>

          <button
            onClick={onConfirm}
            className="flex-1 py-3 rounded-xl bg-red-500 text-white hover:bg-red-600 transition"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
}
