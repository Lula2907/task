// import { useState, useEffect, useCallback } from "react";
// import cookies from "js-cookie";

// const useAuth = () => {
//   const baseUrl = "https://task-backend-2-eq1x.onrender.com";
//   const [auth, setAuth] = useState({
//     isAuthenticated: false,
//     user: null,
//     loading: true
//   });

//   // Define checkAuth outside useEffect so it can be returned
//   const checkAuth = useCallback(async () => {
//     try {
//       const token = cookies.get("jwt"); // ✅ Get token from cookies
//       console.log(document.cookie);

//       if (!token) {
//         setAuth({ isAuthenticated: false, user: null, loading: false });
//         return;
//       }

//       const response = await fetch(`${baseUrl}/admin/checkauth`, {
//         credentials: "include", // ✅ Include credentials
//         method: "GET",
//         headers: {
//           "Content-Type": "application/json",
//           Authorization: `Bearer ${token}` // ✅ Correct token format
//         }
//       });

//       if (response.ok) {
//         const data = await response.json();
//         setAuth({ isAuthenticated: true, user: data, loading: false });
//       } else {
//         setAuth({ isAuthenticated: false, user: null, loading: false });
//       }
//     } catch (error) {
//       console.error("Auth check failed:", error);
//       setAuth({ isAuthenticated: false, user: null, loading: false });
//     }
//   }, []);

//   useEffect(() => {
//     checkAuth(); // ✅ Automatically check authentication on mount
//   }, [checkAuth]);

//   return [auth, checkAuth]; // ✅ Return auth state & checkAuth function
// };

// export default useAuth;
