"use client";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap";
import "bootstrap-icons/font/bootstrap-icons.css";
import "../scss/styles.scss";
import "../index.css";
import { QueryClient, QueryClientProvider } from "react-query";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { isLoggedIn } from "@services/AuthService";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [auth, setAuth] = useState(false);
  const router = useRouter();

  useEffect(() => {
    async function getLoggedIn() {
      const loggedIn = await isLoggedIn();
      setAuth(loggedIn["data"]);
    }
    getLoggedIn();
    if (auth) {
      router.push("/home");
    } else {
      router.push("/login");
    }
  }, [auth, router]);
  return (
    <html lang="en" data-bs-theme="dark">
      <head>
        <style>
          @import
          url('https://fonts.googleapis.com/css2?family=Dosis&family=Nunito&display=swap');
        </style>
      </head>
      <body>
        <QueryClientProvider client={new QueryClient()}>
          <div id="root">{children}</div>
        </QueryClientProvider>
      </body>
    </html>
  );
}
