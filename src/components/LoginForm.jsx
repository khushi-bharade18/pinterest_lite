import React from "react";
import { Eye, EyeOff, Mail } from "lucide-react";

export default function LoginForm({
  handleLogin,
  form,
  setForm,
  showPassword,
  setShowPassword,
  loading,
  error,
}) {
  return (
    <form onSubmit={handleLogin} className="space-y-4">
      <input
        type="email"
        placeholder="Email Address"
        className="w-full px-4 py-2.5 text-sm sm:text-base border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-400 focus:border-transparent"
        value={form.email}
        onChange={(e) => setForm({ ...form, email: e.target.value })}
      />

      <div className="relative">
        <input
          type={showPassword ? "text" : "password"}
          placeholder="Password"
          className="w-full px-4 py-2.5 text-sm sm:text-base border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-400 focus:border-transparent pr-10"
          value={form.password}
          onChange={(e) => setForm({ ...form, password: e.target.value })}
        />

        <button
          type="button"
          onClick={() => setShowPassword(!showPassword)}
          className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
        >
          {showPassword ? <Eye size={18} /> : <EyeOff size={18} />}
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
        {loading ? "Logging in..." : "Login"}
      </button>
    </form>
  );
}
