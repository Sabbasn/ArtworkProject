import NavbarItem from "./NavbarItem";
import "./Navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand">
      <div className="container-fluid">
        <a className="navbar-brand">
          <h1>ArtworkProject</h1>
        </a>
        <div className="d-flex gap-3">
          <NavbarItem bsIcon="bi-person-circle" text="Profile" />
          <NavbarItem bsIcon="bi-box-arrow-right" text="Logout" />
        </div>
      </div>
    </nav>
  );
}
