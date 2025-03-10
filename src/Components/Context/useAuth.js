// import { useState, useEffect } from "react";

// const useAuth = () => {
//   const baseUrl = "https://task-backend-2-eq1x.onrender.com";
//   const [auth, setAuth] = useState({
//     isAuthenticated: false,
//     user: null,
//     loading: true
//   });

//   useEffect(() => {
//     const checkAuth = async () => {
//       try {
//         const response = await fetch(`${baseUrl}/admin/checkauth`);

//         if (response.ok) {
//           const data = await response.json();
//           setAuth({ isAuthenticated: true, user: data, loading: false });
//         } else {
//           setAuth({ isAuthenticated: false, user: null, loading: false });
//         }
//       } catch (error) {
//         setAuth({ isAuthenticated: false, user: null, loading: false });
//       }
//     };

//     checkAuth();
//   }, []);

//   return auth;
// };

// export default useAuth;
