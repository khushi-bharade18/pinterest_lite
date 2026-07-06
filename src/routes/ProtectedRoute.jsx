import { Navigate, Outlet } from "react-router";
import { useSelector } from "react-redux";

export default function ProtectedRoute() {
  const { currUser } = useSelector((state) => state.users);

  return currUser ? <Outlet /> : <Navigate to="/" replace />;
}
