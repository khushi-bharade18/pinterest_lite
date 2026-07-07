import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearError, setError, signupUser } from "../features/usersSlice";
import { useNavigate } from "react-router";

import SignupForm from "../components/auth/SignupForm";
import SignupHero from "../components/auth/SignupHero";

export default function Signup() {
  const name = useSelector((state) => state.users);

  useEffect(() => {
    console.log(name);
  }, [name]);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [user, setUser] = useState({
    id: "",
    name: "",
    email: "",
    phone: "",
    password: "",
  });

  const [cnfm_password, setCnfm_password] = useState("");

  const [showPassword, setShowPassword] = useState(false);

  const [showCnfmPassword, setShowCnfmPassword] = useState(false);

  const [loading, setLoading] = useState(false);

  const { error } = useSelector((state) => state.users);

  function handelChange(e) {
    const { name, value } = e.target;

    setUser((user) => {
      if (name === "phone") {
        return {
          ...user,
          [name]: Number(value),
        };
      }

      return {
        ...user,
        [name]: value,
        id: Date.now(),
      };
    });
  }

  function handelSubmit(e) {
    e.preventDefault();

    if (user.password !== cnfm_password) {
      dispatch(setError("Please match the Password !"));
      console.log("wrong password");
      return;
    }

    try {
      dispatch(clearError());

      setLoading(true);

      setShowPassword(false);

      setShowCnfmPassword(false);

      dispatch(signupUser(user));

      setTimeout(() => {
        setLoading(false);
        navigate("/login");
      }, 1000);
    } catch (error) {
      console.log(error.message);

      setLoading(false);

      dispatch(setError("Something went wrong !"));
    }

    setUser({
      id: "",
      name: "",
      email: "",
      phone: "",
      password: "",
    });

    setCnfm_password("");
  }

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-red-50 via-white to-pink-50">
      {/* Background Blur */}

      <div className="absolute -top-44 -left-40 w-[450px] h-[450px] rounded-full bg-red-200/30 blur-3xl"></div>

      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full bg-pink-200/30 blur-3xl"></div>

      {/* Main Container */}

      <div className="relative z-10 flex min-h-screen items-center justify-center px-4 py-2 lg:px-10">
        <div
          className="
          grid
          w-full
          
          overflow-hidden
          rounded-[35px]
          bg-white/70
          backdrop-blur-xl
          shadow-[0_30px_80px_rgba(0,0,0,.12)]
          lg:grid-cols-2
          "
        >
          {/* Left Side */}

          <SignupHero />

          {/* Right Side */}

          <div className="flex items-center justify-center p-4 sm:p-4 lg:p-6">
            <div className="w-full max-w-lg">
              {/* Mobile Logo */}

              <div className="mb-2 flex justify-center lg:hidden">
                <div className="flex items-center gap-3">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-red-500 shadow-lg">
                    <img src="pinterest_logo.webp" className="h-8 w-8" alt="" />
                  </div>

                  <div>
                    <h2 className="text-2xl font-black text-red-500">
                      Pinterest
                    </h2>

                    <p className="text-sm text-gray-500">Lite</p>
                  </div>
                </div>
              </div>

              {/* Heading */}

              <div className="text-center lg:text-left">

                <h1 className=" text-4xl font-black text-gray-900">
                  Create Your Account
                </h1>

                <p className="mt-3 leading-7 text-gray-500">
                  Save your favourite ideas and organize collections.
                </p>
              </div>

              {/* Signup Form */}

              <SignupForm
                handelChange={handelChange}
                handelSubmit={handelSubmit}
                error={error}
                loading={loading}
                user={user}
                cnfm_password={cnfm_password}
                setCnfm_password={setCnfm_password}
                showPassword={showPassword}
                setShowPassword={setShowPassword}
                showCnfmPassword={showCnfmPassword}
                setShowCnfmPassword={setShowCnfmPassword}
              />

              {/* Divider */}

              <div className="relative my-3">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-200"></div>
                </div>

                <div className="relative flex justify-center">
                  <span className="bg-white px-4 text-sm text-gray-400">
                    Already registered?
                  </span>
                </div>
              </div>

              {/* Login */}

              <button
                onClick={() => navigate("/login")}
                className="
                w-full
                rounded-2xl
                border
                border-red-500
                py-4
                font-semibold
                text-red-500
                transition-all
                duration-300
                hover:bg-red-500
                hover:text-white
                "
              >
                Login Instead
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
