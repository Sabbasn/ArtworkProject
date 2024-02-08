"use client";
import NavbarItem from "./NavbarItem";
import "./Navbar.css";
import { ArtworkUploadModal } from "../../artwork-upload/ArtworkUploadModal";
import { useLogOut } from "@services/AuthService";
import Image from "next/image";
import logo from "@public/ArtiQubeLogo.png";
import { useRouter } from "next/navigation";
import { Cookies } from "react-cookie";

export default function Navbar() {
  const logOut = useLogOut();
  const router = useRouter();
  const cookies = new Cookies();

  return (
    <nav className="navbar mb-3">
      <div className="container-fluid" style={{ padding: "0" }}>
        <a className="navbar-brand">
          <Image
            src={logo}
            width={0}
            height={0}
            alt="Logo"
            style={{ width: "300px", height: "auto" }}
          />
        </a>
        <div className="d-flex">
          <NavbarItem
            bsIcon="bi-camera-fill"
            text="Upload"
            dataBsTarget="#artworkUploadModal"
          />
          <NavbarItem
            bsIcon="bi-person-circle"
            text="Profile"
            onClick={() => router.push(`/profile/${cookies.get("username")}`)}
          />
          <NavbarItem
            bsIcon="bi-box-arrow-right"
            text="Logout"
            onClick={logOut}
          />
        </div>
        <ArtworkUploadModal />
      </div>
    </nav>
  );
}
