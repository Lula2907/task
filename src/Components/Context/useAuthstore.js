import { createContext } from "react";
import { create } from "zustand";
import React from "react";
import cookies from "js-cookie";

import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const base_usel = "https://task-backend-2-eq1x.onrender.com";

export const useAuthstore = create((set) => ({
  isLoggingIn: false,
  isAuthenticated: false,

  login: async (admin, navigate) => {
    set({ isLoggingIn: true });

    const request = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
      body: JSON.stringify(admin)
    };

    const response = await fetch(`${base_usel}/admin/login`, request);
    const data = await response.json();
    set({ isLoggingIn: false });
    console.log("JWT Token:", data.token, data);
    cookies.set("jwt", data.token);

    if (response.ok) {
      toast.success("logged in successfull");
      localStorage.setItem("Admin", JSON.stringify(data));
      localStorage.setItem("Token", data.token);
      navigate("/dashboard");
    } else {
      toast.error("login failed invalid credentials");
    }
  },

  checkAuth: async () => {
    try {
      const response = await fetch(`${base_usel}/admin/checkauth`, {
        credentials: "include",
        method: "GET",
        headers: { "Content-Type": "application/json" }
      });

      if (!response.ok) throw new Error("Unauthorized");

      set({ isAuthenticated: true });
    } catch (error) {
      console.error("Auth check failed:", error);
      set({ isAuthenticated: false });
    }
  }
}));
