"use client";
import Navbar from "../components/home/navbar/Navbar";

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className="container">
        <Navbar />
        {children}
      </div>
    </>
  );
}
