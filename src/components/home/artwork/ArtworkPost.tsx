import { ArtworkPostButton } from "./ArtworkPostButton";
import "./ArtworkPost.css";

interface ArtWorkPostProps {
  artwork: Artwork;
}

export default function ArtWorkPost(props: ArtWorkPostProps) {
  return (
    <div className="card">
      <img
        src={props.artwork.imgUrl}
        className="card-img-top"
        style={{
          maxWidth: "300px",
          maxHeight: "300px",
          width: "auto",
          height: "auto",
        }}
      />
      <div className="card-body">
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <h4 className="card-title">{props.artwork.title}</h4>
            <p className="card-text fst-italic">{props.artwork.description}</p>
          </li>
          <li className="list-group-item">
            <h4>{props.artwork.artistName}</h4>
            <p className="card-text">
              {props.artwork.dateUploaded.toUTCString()}
            </p>
          </li>
          <li className="list-group-item d-flex gap-3 justify-content-evenly">
            <ArtworkPostButton>
              <i className="bi-hand-thumbs-up-fill" />
            </ArtworkPostButton>
            <ArtworkPostButton>
              <i className="bi-chat-dots-fill" />
            </ArtworkPostButton>
          </li>
        </ul>
      </div>
    </div>
  );
}
