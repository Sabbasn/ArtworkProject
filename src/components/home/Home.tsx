import ArtWorkPost from "./artwork/ArtworkPost";
import "./Home.css";
import ArtworkSamples from "./temp-data/ArtworkSamples";

export default function Home() {
  const artworkSamples = ArtworkSamples();
  return (
    <div className="container p-3">
      <div className="d-flex justify-content-center gap-3">
        {artworkSamples
          .sort((a, b) => a.dateUploaded.getTime() - b.dateUploaded.getTime())
          .map((art) => (
            <ArtWorkPost artwork={art} key={art.id} />
          ))}
      </div>
    </div>
  );
}
