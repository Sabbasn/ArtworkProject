import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

export default function HomeLayout() {
  return (
    <>
      <div className="container stretch card">
        <Navbar />
        <div>
          <Outlet />
        </div>
      </div>
    </>
  );
}
