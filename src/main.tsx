import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import "./scss/styles.scss";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LogIn from "./components/authentication/LogIn.tsx";
import AuthService from "./services/AuthService.ts";
import Register from "./components/authentication/Register.tsx";
import Home from "./components/home/Home.tsx";

const _authService = new AuthService();
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
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
    path: "home",
    element: <Home />,
    children: [],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
