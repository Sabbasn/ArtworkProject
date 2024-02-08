"use client";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap";
import "bootstrap-icons/font/bootstrap-icons.css";
import "../scss/styles.scss";
import "../index.css";
import { QueryClient, QueryClientProvider } from "react-query";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-bs-theme="dark">
      <head>
        <style>
          @import
          url('https://fonts.googleapis.com/css2?family=Nunito&display=swap');
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
