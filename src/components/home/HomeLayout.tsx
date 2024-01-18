import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

export default function HomeLayout() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Outlet />
      </div>
    </>
  );
}
