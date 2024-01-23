import ArtWorkPost from "./artwork/ArtworkPost";
import "./Home.css";
import ArtworkSamples from "./temp-data/ArtworkSamples";

export default function Home() {
  const artworkSamples = ArtworkSamples();
  return (
    <div className="">
      <div className="d-flex flex-column justify-content-center align-items-center gap-3">
        {artworkSamples
          .sort((a, b) => a.dateUploaded.getTime() - b.dateUploaded.getTime())
          .map((art) => (
            <ArtWorkPost artwork={art} key={art.id} />
          ))}
      </div>
    </div>
  );
}
