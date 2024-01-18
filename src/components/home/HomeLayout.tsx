import { Outlet } from "react-router-dom";
import "./HomeLayout.css";

export default function HomeLayout() {
  return (
    <div className="container">
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <a className="navbar-brand">
            <h1>ArtworkProject</h1>
          </a>
          <a className="navbar-item" style={{ textDecoration: "none" }}>
            <i
              className="bi-person-circle"
              style={{ color: "white", fontSize: "35px" }}
            />
            <h4 style={{ color: "white" }}>Profile</h4>
          </a>
        </div>
      </nav>
      <Outlet />
    </div>
  );
}
