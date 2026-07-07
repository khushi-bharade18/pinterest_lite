import { Eye, EyeOff, Lock, Mail } from "lucide-react";

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
    <form
      onSubmit={handleLogin}
      className="space-y-6 mt-8 animate-[fadeUp_.8s_ease]"
    >
      {/* Email */}

      <div>
        <label className="block mb-2 text-sm font-semibold text-gray-700">
          Email Address
        </label>

        <div
          className="
          group

          flex

          items-center

          rounded-2xl

          border

          border-gray-200

          bg-white

          px-4

          transition-all

          duration-300

          hover:border-red-300

          focus-within:border-red-500

          focus-within:ring-4

          focus-within:ring-red-100

          shadow-sm
          "
        >
          <Mail
            size={18}
            className="text-gray-400 group-focus-within:text-red-500 transition"
          />

          <input
            type="email"
            placeholder="Enter your email"
            value={form.email}
            onChange={(e) =>
              setForm({
                ...form,
                email: e.target.value,
              })
            }
            className="
            w-full

            bg-transparent

            px-4

            py-4

            outline-none

            text-gray-700

            placeholder:text-gray-400
            "
          />
        </div>
      </div>

      {/* Password */}

      <div>
        <label className="block mb-2 text-sm font-semibold text-gray-700">
          Password
        </label>

        <div
          className="
          group

          flex

          items-center

          rounded-2xl

          border

          border-gray-200

          bg-white

          px-4

          transition-all

          duration-300

          hover:border-red-300

          focus-within:border-red-500

          focus-within:ring-4

          focus-within:ring-red-100

          shadow-sm
          "
        >
          <Lock
            size={18}
            className="text-gray-400 group-focus-within:text-red-500 transition"
          />

          <input
            type={showPassword ? "text" : "password"}
            placeholder="Enter your password"
            value={form.password}
            onChange={(e) =>
              setForm({
                ...form,
                password: e.target.value,
              })
            }
            className="
            w-full

            bg-transparent

            px-4

            py-4

            outline-none

            text-gray-700

            placeholder:text-gray-400
            "
          />

          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="
            p-2

            rounded-full

            hover:bg-red-50

            transition

            duration-300
            "
          >
            {showPassword ? (
              <Eye className="text-red-500" size={20} />
            ) : (
              <EyeOff className="text-gray-500" size={20} />
            )}
          </button>
        </div>
      </div>

      {/* Error */}

      {error && (
        <div
          className="
          rounded-xl

          bg-red-50

          border

          border-red-200

          px-4

          py-3

          text-sm

          text-red-600

          animate-shake
          "
        >
          {error}
        </div>
      )}

      {/* Login Button */}

      <button
        type="submit"
        disabled={loading}
        className={`
          relative

          w-full

          overflow-hidden

          rounded-2xl

          py-4

          font-semibold

          text-white

          transition-all

          duration-300

          ${
            loading
              ? "bg-gray-400 cursor-not-allowed"
              : `
              bg-gradient-to-r
              from-red-500
              via-red-600
              to-pink-600

              hover:scale-[1.02]

              hover:shadow-2xl

              active:scale-95
              `
          }
        `}
      >
        <span className="relative z-10">
          {loading ? "Logging in..." : "Login"}
        </span>

        {!loading && (
          <div
            className="
            absolute

            inset-0

            -translate-x-full

            bg-white/20

            skew-x-12

            hover:translate-x-[250%]

            transition-all

            duration-1000
            "
          />
        )}
      </button>
    </form>
  );
}
