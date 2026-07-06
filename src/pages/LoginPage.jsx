import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearError, loginUser, setError } from "../features/usersSlice";
import { useNavigate } from "react-router";
import LoginForm from "../components/LoginForm";

export default function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const { error } = useSelector((state) => state.users);

  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(clearError());

    try {
      dispatch(clearError());
      setLoading(true);
      setShowPassword(false);
      dispatch(loginUser(form));

      setTimeout(() => {
        setLoading(false);
        navigate("/home");
      }, 1000);
    } catch (err) {
      setLoading(false);
      dispatch(setError("Invalid email or password"));
    }
    setForm({
      email: "",
      password: "",
    });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-6 sm:p-8">
        <div className="text-center mb-6">
          <h2 className="text-2xl sm:text-3xl font-semibold text-gray-800">
            Welcome back !
          </h2>
          <p className="text-gray-500 text-sm mt-1">Login to continue</p>
        </div>

        <LoginForm
          handleLogin={handleLogin}
          form={form}
          setForm={setForm}
          showPassword={showPassword}
          setShowPassword={setShowPassword}
          loading={loading}
          error={error}
        />

        <div className="text-center mt-6 text-sm">
          <p className="text-gray-600">
            Don't have an account?{" "}
            <span
              onClick={() => navigate("/signup")}
              className="text-red-500 font-medium cursor-pointer hover:underline"
            >
              Sign Up
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
