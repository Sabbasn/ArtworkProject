import { ArtworkPostButton } from "./ArtworkPostButton";
import "./ArtworkPost.css";
import { useState } from "react";
import Image from "next/image";

interface ArtWorkPostProps {
  artwork: Artwork;
}

function formatDate(date: Date){
  const datestring:string = date.toLocaleDateString();
  const timestring:string = date.toLocaleTimeString();
  return `${datestring} - ${timestring}`
}

export default function ArtWorkPost(props: ArtWorkPostProps) {
  const [isLiked, setIsLiked] = useState(false);

  return (
    <div className="card" style={{ maxWidth: "400px", width: "100%" }}>
      <div className="image-component d-flex align-items-center justify-content-center flex-column">
        <p className="view-image-text">View full image</p>
        <Image
          src={props.artwork.fileData}
          alt="something"
          className="card-img-top"
          width="0"
          height="0"
          sizes="100vw"
          style={{ width: "100%", height: "auto" }}
        />
        <Image
          src={props.artwork.fileData}
          alt="something"
          className="card-img-glow"
          width="0"
          height="0"
          sizes="100vw"
          style={{ width: "100%", height: "auto" }}
        />
      </div>
      <div className="card-body d-flex align-items-center justify-content-center">
        <ul
          className="card-body-ul d-flex flex-column container"
          style={{ maxWidth: "100%" }}
        >
          <li className="list-group-item">
          <div className="creator-info">
              <i className="uploaded-by">Uploaded by: </i>
              <i className="creator"><b> {props.artwork.creatorName}</b></i>
            </div>
            <h2 className="card-title">{props.artwork.title}</h2>
            <p className="card-text fst-italic">{props.artwork.description}</p>
          </li>
          <li className="button-group list-group-item d-flex gap-3 justify-content-evenly">
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
          <li className="list-group-item">
            <p className="datetime card-text">
              {formatDate(new Date(+props.artwork.createdAt * 1000))}
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
}
