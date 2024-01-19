import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import LogIn from "./components/authentication/LogIn.tsx";
import Register from "./components/authentication/Register.tsx";
import Home from "./components/home/Home.tsx";
import AuthLayout from "./components/authentication/AuthLayout.tsx";
import HomeLayout from "./components/home/HomeLayout.tsx";
import "./App.css";
import { createContext, useState } from "react";
import AuthService from "./services/AuthService.ts";

const authService = new AuthService();
export const AuthContext = createContext();

function App() {
  const [authenticated, setAuthenticated] = useState(false);
  const router = createBrowserRouter([
    {
      path: "/",
      element: !authenticated ? <AuthLayout /> : <Navigate to="/home" />,
      children: [
        {
          path: "login",
          element: <LogIn />,
        },
        {
          path: "register",
          element: <Register />,
        },
        {
          path: "/",
          element: <Navigate to="/login" />,
        },
      ],
    },
    {
      path: "/",
      element: authenticated ? <HomeLayout /> : <Navigate to="/login" />,
      children: [
        {
          path: "home",
          element: <Home />,
        },
        {
          path: "/",
          element: <Navigate to="/home" />,
        },
      ],
    },
  ]);

  return (
    <AuthContext.Provider value={setAuthenticated}>
      <RouterProvider router={router} />
    </AuthContext.Provider>
  );
}

export default App;
