import { ArtworkPostButton } from "./ArtworkPostButton";
import "./ArtworkPost.css";
import { useState } from "react";

interface ArtWorkPostProps {
  artwork: Artwork;
}

export default function ArtWorkPost(props: ArtWorkPostProps) {
  const [isLiked, setIsLiked] = useState(false);

  return (
    <div className="card" style={{ maxWidth: "400px", width: "100%" }}>
      <img
        src={props.artwork.imgUrl}
        className="card-img-top"
        style={{
          maxWidth: "400px",
          maxHeight: "400px",
          width: "auto",
          height: "auto",
        }}
      />
      <div className="card-body d-flex align-items-end justify-content-center">
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
            <ArtworkPostButton
              active={isLiked}
              onClick={() => setIsLiked(!isLiked)}
            >
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
