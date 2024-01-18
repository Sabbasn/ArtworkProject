import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./scss/styles.scss";
import "bootstrap-icons/font/bootstrap-icons.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LogIn from "./components/authentication/LogIn.tsx";
import AuthService from "./services/AuthService.ts";
import Register from "./components/authentication/Register.tsx";
import Home from "./components/home/Home.tsx";
import AuthLayout from "./components/authentication/AuthLayout.tsx";
import HomeLayout from "./components/home/HomeLayout.tsx";

const _authService = new AuthService();
const router = createBrowserRouter([
  {
    path: "/",
    element: <AuthLayout />,
    children: [
      {
        path: "/",
        element: <LogIn authService={_authService} />,
      },
      {
        path: "register",
        element: <Register authService={_authService} />,
      },
    ],
  },
  {
    path: "/",
    element: <HomeLayout />,
    children: [
      {
        path: "home",
        element: <Home />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
