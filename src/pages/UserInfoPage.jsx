import ProfileSidebar from "../components/User_Info/ProfileSidebar";
import UserDetailsForm from "../components/User_Info/UserDetailsForm";

export default function UserInfoPage() {
  return (
    <div className="min-h-screen bg-gray-100 pt-24 sm:pt-28 pb-8 px-3 sm:px-5 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div
          className="
          bg-white
          rounded-3xl
          shadow-xl
          overflow-hidden

          grid
          grid-cols-1
          lg:grid-cols-[320px_1fr]
          "
        >
          <ProfileSidebar />

          <UserDetailsForm />
        </div>
      </div>
    </div>
  );
}
