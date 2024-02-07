import { ArtworkPostButton } from "./ArtworkPostButton";
import "./ArtworkPost.css";
import { useState } from "react";
import Image from "next/image";

interface ArtWorkPostProps {
  artwork: Artwork;
}

export default function ArtWorkPost(props: ArtWorkPostProps) {
  const [isLiked, setIsLiked] = useState(false);

  return (
    <div className="card" style={{ maxWidth: "400px", width: "100%" }}>
      <Image
        src={props.artwork.fileData}
        alt="something"
        className="card-img-top"
        width="0"
        height="0"
        sizes="100vw"
        style={{ width: "100%", height: "auto" }}
      />
      <div className="card-body d-flex align-items-end justify-content-center">
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <h2 className="card-title">{props.artwork.title}</h2>
            <p className="card-text fst-italic">{props.artwork.description}</p>
          </li>
          <li className="list-group-item">
            <p>By: {props.artwork.creatorName}</p>
            <p className="card-text">
              {new Date(+props.artwork.createdAt).toISOString()}
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
