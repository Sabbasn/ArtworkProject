import { Outlet } from "react-router-dom";

export default function AuthLayout() {
  return (
    <div className="container h-100 d-flex justify-content-center align-items-center">
      <div>
        <h1>ArtworkProject</h1>
        <p className="fst-italic">The go to place for the modern artist</p>
      </div>
      <Outlet />
    </div>
  );
}
