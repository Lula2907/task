import { React, useEffect } from "react";
import Navbar from "./Components/Navbar";

import Admindashboard from "./Components/Admindashboard";
import { Outlet } from "react-router-dom";
import Footer from "./Components/Footer";
import Login from "./Components/Login";
import { toast, Toaster } from "react-hot-toast";

import Assignform from "./Components/Assignform";
import Home from "./Components/Home";
import Usersignup from "./Components/Usersignup";
import Userlogin from "./Components/Userlogin";
import { useAuthstore } from "./Components/Context/useAuthstore.js";

export const App = () => {
  const { isAuthenticated, checkAuth } = useAuthstore();

  useEffect(() => {
    checkAuth();
  }, [checkAuth]);

  console.log(isAuthenticated);

  return (
    <>
      <Toaster></Toaster>
      <Navbar></Navbar>
      <Outlet>
        <Home></Home>
        <Login></Login>
        <Usersignup></Usersignup>
        <Userlogin></Userlogin>
        <Admindashboard></Admindashboard>
      </Outlet>
      <Footer></Footer>
    </>
  );
};

export default App;
