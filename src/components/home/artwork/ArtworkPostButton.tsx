import { MouseEventHandler } from "react";

interface ArtworkPostButton {
  children: any;
  active?: any;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

export function ArtworkPostButton(props: ArtworkPostButton) {
  return (
    <button
      onClick={props.onClick}
      className={`btn btn-primary ${props.active ? "active" : ""}`}
      style={{}}
    >
      {props.children}
    </button>
  );
}
