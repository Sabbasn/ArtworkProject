import NavbarItem from "./NavbarItem";
import "./Navbar.css";
import AuthService from "../../services/AuthService";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const authService = new AuthService();
  const navigate = useNavigate();

  function logOut() {
    authService.logOut();
    navigate("/");
  }

  return (
    <nav className="navbar">
      <div className="container-fluid" style={{ padding: "0" }}>
        <a className="navbar-brand">
          <h1>ArtworkProject</h1>
        </a>
        <div className="d-flex">
          <NavbarItem bsIcon="bi-person-circle" text="Profile" />
          <NavbarItem
            bsIcon="bi-box-arrow-right"
            text="Logout"
            onClick={logOut}
          />
        </div>
      </div>
    </nav>
  );
}
