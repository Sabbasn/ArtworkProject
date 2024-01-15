import "./ArtworkPost.css";

interface ArtWorkPostProps {
  artwork: Artwork;
}

export default function ArtWorkPost(props: ArtWorkPostProps) {
  return (
    <div className="card hover-scale">
      <img
        src={props.artwork.imgUrl}
        className="card-img-top"
        style={{
          maxWidth: "300px",
          width: "auto",
          height: "auto",
        }}
      />
      <div
        className="card-body"
        style={{ backgroundImage: "linear-gradient(#BD2D76, #D6245C)" }}
      >
        <h2 className="card-title">{props.artwork.title}</h2>
        <p className="card-text fst-italic">{props.artwork.description}</p>
        <h3>By: {props.artwork.artistName}</h3>
        <p className="card-text">{props.artwork.dateUploaded.toUTCString()}</p>
      </div>
    </div>
  );
}
