interface Props {
  bsIcon: string;
  text: string;
}

export default function NavbarItem(props: Props) {
  return (
    <a
      className="navbar-item"
      style={{ textDecoration: "none", width: "80px", height: "80px" }}
    >
      <i className={props.bsIcon} style={{ fontSize: "35px" }} />
      <p>{props.text}</p>
    </a>
  );
}
