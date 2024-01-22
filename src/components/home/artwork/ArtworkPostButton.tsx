interface ArtworkPostButton {
  children: any;
  active?: false;
}

export function ArtworkPostButton(props: ArtworkPostButton) {
  return <button className="btn btn-primary">{props.children}</button>;
}
