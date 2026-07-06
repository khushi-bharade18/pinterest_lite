import { Home, LogOut, Save } from "lucide-react";

import { Link } from "react-router";

import { useState } from "react";

import LogoutModal from "./LogoutModal";

import { useDispatch } from "react-redux";

import { logoutUser } from "../features/usersSlice";

import { useNavigate } from "react-router";

import toast from "react-hot-toast";

export default function ActionButtons() {
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const [open, setOpen] = useState(false);

  function handleLogout() {
    dispatch(logoutUser());

    toast.success("Logged Out");

    navigate("/");
  }

  return (
    <>
      <div
        className="
pt-6

grid

grid-cols-1
sm:grid-cols-2
lg:grid-cols-3

gap-4
"
      >
        <button
          type="submit"
          className="bg-red-500 text-white rounded-xl py-3 flex justify-center items-center gap-2 hover:bg-red-600"
        >
          <Save size={18} />
          Save
        </button>

        <Link
          to="/home"
          className="bg-gray-100 rounded-xl py-3 flex justify-center items-center gap-2 hover:bg-gray-200"
        >
          <Home size={18} />
          Back Home
        </Link>

        <button
          type="button"
          onClick={() => setOpen(true)}
          className="bg-black text-white rounded-xl py-3 flex justify-center items-center gap-2"
        >
          <LogOut size={18} />
          Logout
        </button>
      </div>

      {open && (
        <LogoutModal onClose={() => setOpen(false)} onConfirm={handleLogout} />
      )}
    </>
  );
}
