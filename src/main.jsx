import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import {
  Route,
  Router,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider
} from "react-router-dom";

import Admindashboard from "./Components/Admindashboard.jsx";
import Login from "./Components/Login.jsx";
import Home from "./Components/Home.jsx";
import Usersignup from "./Components/Usersignup.jsx";
import Userlogin from "./Components/Userlogin.jsx";
import Userdashboard from "./Components/Userdashboard.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<App />}>
      <Route index path="/" element={<Home />} />
      <Route path="/adminlogin" element={<Login />} />
      <Route path="/usersignup" element={<Usersignup />} />
      <Route path="/userlogin" element={<Userlogin />} />
      <Route path="/dashboard" element={<Admindashboard></Admindashboard>} />
      <Route path="/userdashboard" element={<Userdashboard></Userdashboard>} />
    </Route>
  )
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>
);
