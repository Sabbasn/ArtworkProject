import { MouseEventHandler, ReactNode } from "react";

interface ArtworkPostButton {
  children: ReactNode;
  active?: boolean;
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
