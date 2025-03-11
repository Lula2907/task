import { Navigate, Outlet } from "react-router-dom";
import { useState, useEffect } from "react";
import cookies from "js-cookie";

const ProtectedRoute = () => {
  const [loading, setLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const adminData = localStorage.getItem("Admin");
    const token = cookies.get("jwt");
    console.log(9, token);

    if (adminData && token) {
      setIsAuthenticated(true);
    }
    setLoading(false);
  }, []);

  if (loading) return <p>Loading...</p>;

  return isAuthenticated ? <Outlet /> : <Navigate to="/" />;
};

export default ProtectedRoute;
