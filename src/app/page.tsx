"use client";
import { useEffect, useState } from "react";
import { isLoggedIn } from "@services/AuthService.ts";
import "../App.css";
import { useRouter } from "next/navigation";

export default function App() {
  const [auth, setAuth] = useState(false);
  const router = useRouter();

  useEffect(() => {
    async function getLoggedIn() {
      const loggedIn = await isLoggedIn();
      setAuth(loggedIn["data"]);
    }
    getLoggedIn();
  }, []);

  if (auth) {
    router.push("/home");
  } else {
    router.push("/login");
  }

  return (
    <div>
      <h1>Redirecting..</h1>
    </div>
  );
}
