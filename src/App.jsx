import { BrowserRouter, Routes, Route } from "react-router";
import { Toaster } from "react-hot-toast";
import Login from "./pages/LoginPage";
import Signup from "./pages/SignupPage";
import ProtectedRoute from "./routes/ProtectedRoute";
import HomeLayout from "./pages/HomeLayout";
import HomePage from "./pages/HomePage";
import SavedPage from "./pages/SavedPage";
import UserInfoPage from "./pages/UserInfoPage";
import NotFound from "./pages/NotFound";

export default function App() {
  return (
    <BrowserRouter>
      <Toaster
        position="top-right"
        reverseOrder={false}
        toastOptions={{
          duration: 1500,
          style: {
            borderRadius: "5px",
            background: "#4a4949e0",
            color: "#fff",
          },
        }}
      />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        {/* Protected Routes */}
        <Route element={<ProtectedRoute />}>
          <Route path="/home" element={<HomeLayout />}>
            <Route index element={<HomePage />} />
            <Route path="saved" element={<SavedPage />} />
            <Route path="profile" element={<UserInfoPage />} />
          </Route>
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
