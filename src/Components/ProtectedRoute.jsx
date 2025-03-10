import { Navigate, Outlet } from "react-router-dom";
import useAuth from "./Context/useAuth.js";

const ProtectedRoute = () => {
  const { isAuthenticated, loading } = useAuth();

  if (loading) return <p>Loading...</p>;

  return isAuthenticated ? <Outlet /> : <Navigate to="/adminlogin" />;
};

export default ProtectedRoute;
