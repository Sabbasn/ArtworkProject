import NavbarItem from "./NavbarItem";
import "./Navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar" style={{ borderBottom: "1px solid white" }}>
      <div className="container-fluid" style={{ padding: "0" }}>
        <a className="navbar-brand">
          <h1>ArtworkProject</h1>
        </a>
        <div className="d-flex">
          <NavbarItem bsIcon="bi-person-circle" text="Profile" />
          <NavbarItem bsIcon="bi-box-arrow-right" text="Logout" />
        </div>
      </div>
    </nav>
  );
}
