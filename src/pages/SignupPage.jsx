import React, { useEffect, useState } from "react";
import SignupForm from "../components/SignupForm";
import { useDispatch, useSelector } from "react-redux";
import { clearError, setError, signupUser } from "../features/usersSlice";
import { useNavigate } from "react-router";

export default function ResultGrid() {
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
      if (name === "phone") return { ...user, [name]: Number(value) };
      return { ...user, [name]: value, ["id"]: Date.now() };
    });
  }

  function handelSubmit(e) {
    e.preventDefault();
    if (user.password !== cnfm_password) {
      dispatch(setError("Please match the Password !"));
      console.log("wrong password")
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
      console.log(error.message)
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
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-6 sm:p-8">
        <div className="text-center mb-6">
          <h2 className="text-2xl sm:text-3xl font-semibold text-gray-800">
            Create your account
          </h2>
          <p className="text-gray-500 text-sm mt-1">
            Join and explore new ideas ✨
          </p>
        </div>

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

        <div className="text-center mt-6 text-sm">
          <p className="text-gray-600">
            Already have an account?{" "}
            <span
              onClick={() => navigate("/login")}
              className="text-red-500 font-medium cursor-pointer hover:underline"
            >
              Login
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
