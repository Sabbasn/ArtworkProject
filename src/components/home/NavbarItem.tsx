interface Props {
  bsIcon: string;
  text: string;
}

export default function NavbarItem(props: Props) {
  return (
    <a className="navbar-item" style={{ textDecoration: "none" }}>
      <i
        className={props.bsIcon}
        style={{ color: "white", fontSize: "35px" }}
      />
      <h4 style={{ color: "white" }}>{props.text}</h4>
    </a>
  );
}
