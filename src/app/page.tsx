"use client";
import { useEffect, useState } from "react";
import "../App.css";
import { useRouter } from "next/navigation";
import { isLoggedIn } from "@services/AuthService";

export default function App() {
  const [auth, setAuth] = useState(false);
  const router = useRouter();

  useEffect(() => {
    async function getLoggedIn() {
      const loggedIn = await isLoggedIn();
      setAuth(loggedIn);
      console.log(auth);
    }
    getLoggedIn();
    if (!auth) {
      router.push("/login");
    } else {
      router.push("/home");
    }
  }, [auth, router]);
  return (
    <div>
      <h1>Redirecting..</h1>
    </div>
  );
}
