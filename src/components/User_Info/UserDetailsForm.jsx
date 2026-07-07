import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { updateUser } from "../../features/usersSlice";
import toast from "react-hot-toast";
import ActionButtons from "./ActionButtons";

export default function UserDetailsForm() {
  const dispatch = useDispatch();
  const { currUser } = useSelector((state) => state.users);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [formData, setFormData] = useState({
    ...currUser,

    confirmPassword: currUser.password,
  });

  function handleChange(e) {
    setFormData({
      ...formData,

      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();

    dispatch(updateUser(formData));

    toast.success("Profile Updated");
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="p-5 sm:p-7 md:p-8 lg:p-10 space-y-5 "
    >
      <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold">
        Your Information
      </h1>

      <div>
        <label>Name</label>

        <input
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="w-full mt-2 border rounded-xl px-4 py-3 text-sm sm:text-base outline-none focus:ring-2 focus:ring-red-500"
        />
      </div>

      <div>
        <label>Email</label>

        <input
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="w-full mt-2 border rounded-xl px-4 py-3 text-sm sm:text-base outline-none focus:ring-2 focus:ring-red-500"
        />
      </div>

      <div>
        <label>Contact Number</label>

        <input
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          className="w-full mt-2 border rounded-xl px-4 py-3 text-sm sm:text-base outline-none focus:ring-2 focus:ring-red-500"
        />
      </div>

      <div>
        <label>Password</label>

        <div className="relative">
          <input
            type={showPassword ? "text" : "password"}
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="w-full mt-2 border rounded-xl px-4 py-3 text-sm sm:text-base outline-none focus:ring-2 focus:ring-red-500"
          />

          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-red-500"
          >
            {showPassword ? <Eye /> : <EyeOff />}
          </button>
        </div>
      </div>

      <div>
        <label>Confirm Password</label>

        <div className="relative">
          <input
            type={showConfirmPassword ? "text" : "password"}
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            className="w-full mt-2 border rounded-xl px-4 py-3 text-sm sm:text-base outline-none focus:ring-2 focus:ring-red-500"
          />

          <button
            type="button"
            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-red-500"
          >
            {showConfirmPassword ? <Eye /> : <EyeOff />}
          </button>
        </div>
      </div>

      <ActionButtons formData={formData} />
    </form>
  );
}
