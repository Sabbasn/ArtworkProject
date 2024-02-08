"use server";
import Navbar from "../components/home/navbar/Navbar";

export default async function HomeLayout({
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
