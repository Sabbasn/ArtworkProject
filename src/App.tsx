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
import { useEffect, useState } from "react";
import { isLoggedIn } from "@services/AuthService.ts";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

function App() {
  const [auth, setAuth] = useState(false);

  useEffect(() => {
    async function getLoggedIn() {
      const loggedIn = await isLoggedIn();
      setAuth(loggedIn["data"]);
    }
    getLoggedIn();
  }, []);

  const router = createBrowserRouter([
    {
      path: "/",
      element: !auth ? <AuthLayout /> : <Navigate to="/home" />,
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
      element: auth ? <HomeLayout /> : <Navigate to="/login" />,
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
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
}

export default App;
