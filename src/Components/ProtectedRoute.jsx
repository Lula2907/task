import { Navigate, Outlet } from "react-router-dom";
import useAuth from "./Context/useAuth.js";

const ProtectedRoute = () => {
  const adminId = JSON.parse(localStorage.getItem("Admin")) || {};
  // const { isAuthenticated, loading } = useAuth();

  if (loading) return <p>Loading...</p>;

  return adminId !== null ? <Outlet /> : <Navigate to="/adminlogin" />;
};

export default ProtectedRoute;
