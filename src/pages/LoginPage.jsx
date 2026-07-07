import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearError, loginUser, setError } from "../features/usersSlice";
import { useNavigate } from "react-router";

import LoginForm from "../components/auth/LoginForm";
import LoginHero from "../components/auth/LoginHero";

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
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-red-50 via-white to-pink-50">
      {/* Background Blur */}

      <div className="absolute -top-40 -left-40 w-[500px] h-[500px] rounded-full bg-red-200/30 blur-3xl"></div>

      <div className="absolute bottom-0 right-0 w-[450px] h-[450px] rounded-full bg-pink-200/30 blur-3xl"></div>

      {/* Main Container */}

      <div className="relative z-10 min-h-screen flex items-center justify-center px-4 lg:px-12">
        <div
          className="
          w-full
          

          bg-white/70

          backdrop-blur-xl

          rounded-[35px]

          shadow-[0_30px_80px_rgba(0,0,0,.12)]

          overflow-hidden

          grid

          lg:grid-cols-2
          "
        >
          {/* Left Side */}

          <LoginHero />

          {/* Right Side */}

          <div className="flex items-center justify-center p-6 sm:p-8 lg:p-10">
            <div className="w-full max-w-md">
              {/* Mobile Logo */}

              <div className="lg:hidden flex justify-center ">
                <div className="flex items-center gap-3">
                  <div className="w-14 h-14 rounded-full bg-red-500 flex items-center justify-center shadow-lg">
                    <img src="pinterest_logo.webp" alt="" className="w-8 h-8" />
                  </div>

                  <div>
                    <h2 className="font-black text-2xl text-red-500">
                      Pinterest
                    </h2>

                    <p className="text-gray-500 text-sm">Lite</p>
                  </div>
                </div>
              </div>

              {/* Heading */}

              <div className="text-center lg:text-left">
               

                <h1 className=" text-4xl font-black text-gray-900">
                  Login to Continue
                </h1>

                <p className="mt-3 text-gray-500 leading-7">
                  Discover millions of photos and stickers, save your favourites.
                </p>
              </div>

              {/* Login Form */}

              <LoginForm
                handleLogin={handleLogin}
                form={form}
                setForm={setForm}
                showPassword={showPassword}
                setShowPassword={setShowPassword}
                loading={loading}
                error={error}
              />

              {/* Divider */}

              <div className="relative my-3">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-200"></div>
                </div>

                <div className="relative flex justify-center">
                  <span className="bg-white px-4 text-sm text-gray-400">
                    New here?
                  </span>
                </div>
              </div>

              {/* Signup */}

              <button
                onClick={() => navigate("/signup")}
                className="
                w-full

                rounded-2xl

                border

                border-red-500

                py-4

                font-semibold

                text-red-500

                hover:bg-red-500

                hover:text-white

                transition-all

                duration-300
                "
              >
                Create New Account
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
