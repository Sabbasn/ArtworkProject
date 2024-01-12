import "./ArtworkPost.css";

interface ArtWorkPostProps {
  artwork: Artwork;
}

export default function ArtWorkPost(props: ArtWorkPostProps) {
  return (
    <div
      className="card mx-auto hover-scale"
      style={{
        width: "18rem",
        backgroundImage: "linear-gradient(#103252, #4176af)",
      }}
    >
      <img src={props.artwork.imgUrl} className="card-img-top" />
      <div className="card-body">
        <h2 className="card-title">{props.artwork.title}</h2>
        <p className="card-text fst-italic">{props.artwork.description}</p>
        <h3>By: {props.artwork.artistName}</h3>
        <p className="card-text">{props.artwork.dateUploaded.toUTCString()}</p>
      </div>
    </div>
  );
}
