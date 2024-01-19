import NavbarItem from "./NavbarItem";
import "./Navbar.css";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../App";

export default function Navbar() {
  const navigate = useNavigate();
  const setAuthenticated = useContext(AuthContext);

  function logOut() {
    setAuthenticated(false);
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
