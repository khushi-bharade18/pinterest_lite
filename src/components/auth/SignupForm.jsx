import {
  Eye,
  EyeOff,
  User,
  Mail,
  Phone,
  Lock,
} from "lucide-react";

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
    <form
      onSubmit={handelSubmit}
      className="space-y-5 mt-4 animate-[fadeUp_.8s_ease]"
    >
      {/* Name */}

      <InputBox
        icon={<User size={18} />}
        type="text"
        name="name"
        placeholder="Full Name"
        value={user.name}
        onChange={handelChange}
      />

      {/* Email */}

      <InputBox
        icon={<Mail size={18} />}
        type="email"
        name="email"
        placeholder="Email Address"
        value={user.email}
        onChange={handelChange}
      />

      {/* Phone */}

      <InputBox
        icon={<Phone size={18} />}
        type="tel"
        name="phone"
        placeholder="Phone Number"
        value={user.phone}
        onChange={handelChange}
      />

      {/* Password */}

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
        shadow-sm
        transition-all
        duration-300
        hover:border-red-300
        focus-within:border-red-500
        focus-within:ring-4
        focus-within:ring-red-100
        "
      >
        <Lock
          size={18}
          className="text-gray-400 group-focus-within:text-red-500 transition"
        />

        <input
          required
          name="password"
          type={showPassword ? "text" : "password"}
          placeholder="Password"
          value={user.password}
          onChange={handelChange}
          className="w-full bg-transparent px-4 py-4 outline-none text-gray-700 placeholder:text-gray-400"
        />

        <button
          type="button"
          onClick={() => setShowPassword(!showPassword)}
          className="rounded-full p-2 hover:bg-red-50 transition"
        >
          {showPassword ? (
            <Eye className="text-red-500" size={20} />
          ) : (
            <EyeOff className="text-gray-500" size={20} />
          )}
        </button>
      </div>

      {/* Confirm Password */}

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
        shadow-sm
        transition-all
        duration-300
        hover:border-red-300
        focus-within:border-red-500
        focus-within:ring-4
        focus-within:ring-red-100
        "
      >
        <Lock
          size={18}
          className="text-gray-400 group-focus-within:text-red-500 transition"
        />

        <input
          required
          type={showCnfmPassword ? "text" : "password"}
          placeholder="Confirm Password"
          value={cnfm_password}
          onChange={(e) => setCnfm_password(e.target.value)}
          className="w-full bg-transparent px-4 py-4 outline-none text-gray-700 placeholder:text-gray-400"
        />

        <button
          type="button"
          onClick={() =>
            setShowCnfmPassword(!showCnfmPassword)
          }
          className="rounded-full p-2 hover:bg-red-50 transition"
        >
          {showCnfmPassword ? (
            <Eye className="text-red-500" size={20} />
          ) : (
            <EyeOff className="text-gray-500" size={20} />
          )}
        </button>
      </div>

      {/* Error */}

      {error && (
        <div className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-600 animate-shake">
          {error}
        </div>
      )}

      {/* Terms */}

      <div className="flex items-start gap-3 text-sm text-gray-500">

        <input
          required
          type="checkbox"
          className="mt-1 accent-red-500"
        />

        <p>
          I agree to the
          <span className="text-red-500 font-semibold cursor-pointer hover:underline">
            {" "}
            Terms
          </span>{" "}
          &
          <span className="text-red-500 font-semibold cursor-pointer hover:underline">
            {" "}
            Privacy Policy
          </span>
        </p>

      </div>

      {/* Button */}

      <button
        type="submit"
        disabled={loading}
        className={`relative w-full overflow-hidden rounded-2xl py-4 font-semibold text-white transition-all duration-300 ${
          loading
            ? "bg-gray-400 cursor-not-allowed"
            : "bg-gradient-to-r from-red-500 via-red-600 to-pink-600 hover:scale-[1.02] hover:shadow-2xl active:scale-95"
        }`}
      >
        <span className="relative z-10">
          {loading ? "Creating Account..." : "Create Account"}
        </span>

        {!loading && (
          <div className="absolute inset-0 -translate-x-full skew-x-12 bg-white/20 transition-all duration-1000 hover:translate-x-[250%]" />
        )}
      </button>
    </form>
  );
}

function InputBox({
  icon,
  type,
  name,
  placeholder,
  value,
  onChange,
}) {
  return (
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
      shadow-sm
      transition-all
      duration-300
      hover:border-red-300
      focus-within:border-red-500
      focus-within:ring-4
      focus-within:ring-red-100
      "
    >
      <div className="text-gray-400 group-focus-within:text-red-500 transition">
        {icon}
      </div>

      <input
        required
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="w-full bg-transparent px-4 py-4 outline-none text-gray-700 placeholder:text-gray-400"
      />
    </div>
  );
}