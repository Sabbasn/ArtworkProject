import NavbarItem from "./NavbarItem";
import "./Navbar.css";
import { useRouter } from "next/navigation";
import { logOut } from "@services/AuthService";
import { ArtworkUploadModal } from "../../artwork-upload/ArtworkUploadModal";

export default function Navbar() {
  const navigate = useRouter();

  function handleLogOut() {
    logOut();
    navigate.push("/login");
  }

  return (
    <nav className="navbar mb-3">
      <div className="container-fluid" style={{ padding: "0" }}>
        <a className="navbar-brand">
          <h1>ArtworkProject</h1>
        </a>
        <div className="d-flex">
          <NavbarItem
            bsIcon="bi-camera-fill"
            text="Upload"
            dataBsTarget="#artworkUploadModal"
          />
          <NavbarItem bsIcon="bi-person-circle" text="Profile" />
          <NavbarItem
            bsIcon="bi-box-arrow-right"
            text="Logout"
            onClick={handleLogOut}
          />
        </div>
        <ArtworkUploadModal />
      </div>
    </nav>
  );
}
