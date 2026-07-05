import React from "react";
import { Eye, EyeOff } from "lucide-react";

export default function SignupForm({
  handelChange,
  handelSubmit,
  error,
  loading,
  user,
  cnfm_password,
  setCnfm_password,
  showPassword,
  setShowPassword,
  showCnfmPassword,
  setShowCnfmPassword,
}) {
  return (
    <form onSubmit={handelSubmit} className="space-y-4">
      <div>
        <input
          required
          name="name"
          type="text"
          placeholder="Full Name"
          value={user.name}
          onChange={(e) => handelChange(e)}
          className="w-full px-4 py-2.5 text-sm sm:text-base border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
        />
      </div>

      <div>
        <input
          required
          name="email"
          type="email"
          placeholder="Email Address"
          value={user.email}
          onChange={(e) => handelChange(e)}
          className="w-full px-4 py-2.5 text-sm sm:text-base border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
        />
      </div>

      <div>
        <input
          required
          name="phone"
          type="tel"
          placeholder="Phone Number"
          value={user.phone}
          onChange={(e) => handelChange(e)}
          className="w-full px-4 py-2.5 text-sm sm:text-base border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
        />
      </div>

      <div className="relative">
        <input
          required
          name="password"
          type={showPassword ? "text" : "password"}
          placeholder="Password"
          value={user.password}
          onChange={(e) => handelChange(e)}
          className="w-full px-4 py-2.5 text-sm sm:text-base border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent pr-10"
        />
        <button
          type="button"
          onClick={() => setShowPassword(!showPassword)}
          className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
        >
          {showPassword ? <Eye size={18} /> : <EyeOff size={18} />}
        </button>
      </div>

      <div className="relative">
        <input
          required
          name="cnfm_password"
          type={showCnfmPassword ? "text" : "password"}
          placeholder="Confirm Password"
          value={cnfm_password}
          onChange={(e) => setCnfm_password(e.target.value)}
          className="w-full px-4 py-2.5 text-sm sm:text-base border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent pr-10"
        />
        <button
          type="button"
          onClick={() => setShowCnfmPassword(!showCnfmPassword)}
          className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
        >
          {showCnfmPassword ? <Eye size={18} /> : <EyeOff size={18} />}
        </button>
      </div>
      {error && <p className="text-red-500 text-sm">{error}</p>}
      <button
        type="submit"
        disabled={loading}
        className={`w-full py-2.5 sm:py-3 text-sm sm:text-base rounded-lg font-medium transition 
          ${
            loading
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-red-500 hover:bg-red-600 text-white active:scale-[0.98]"
          }
          `}
      >
        Sign Up
      </button>
    </form>
  );
}
