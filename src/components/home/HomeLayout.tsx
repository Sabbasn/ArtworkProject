import { Outlet } from "react-router-dom";
import Navbar from "./navbar/Navbar";

export default function HomeLayout() {
  return (
    <>
      <div className="container">
        {" "}
        <Navbar />
        <div className="container stretch">
          <div>
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
}
