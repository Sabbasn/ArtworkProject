interface Props {
  bsIcon: string;
  text: string;
  dataBsTarget?: string;
  onClick?: React.MouseEventHandler;
}

export default function NavbarItem(props: Props) {
  return (
    <a
      className="navbar-item"
      data-bs-toggle="modal"
      data-bs-target={props.dataBsTarget}
      style={{ textDecoration: "none", width: "80px", height: "80px" }}
      onClick={props.onClick}
    >
      <i className={props.bsIcon} style={{ fontSize: "35px" }} />
      <p>{props.text}</p>
    </a>
  );
}
