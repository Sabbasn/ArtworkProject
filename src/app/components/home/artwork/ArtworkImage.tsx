import Image from "next/image";
interface ArtworkProp{
    imageData: string
}

export default function ArtworkImage(props: ArtworkProp){
    return (
        <div className="image-component d-flex align-items-center justify-content-center flex-column">
            <p className="view-image-text">View full image</p>
            <Image
            src={props.imageData}
            alt="something"
            className="card-img-top"
            width="0"
            height="0"
            sizes="100vw"
            style={{ width: "100%", height: "auto" }}
            />
            <Image
            src={props.imageData}
            alt="something"
            className="card-img-glow"
            width="0"
            height="0"
            sizes="100vw"
            style={{ width: "100%", height: "auto" }}
            />
      </div>
    )
}