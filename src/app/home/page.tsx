"use client";
import ArtWorkPost from "../components/home/artwork/ArtworkPost";
import "./Home.css";
import { fetchArtwork } from "@services/ArtworkService";
import { useQuery } from "react-query";

export default function Home() {
  const { data, status } = useQuery<Artwork[], Error>("art", fetchArtwork);

  const printArtwork = () => {
    if (data === undefined) {
      return;
    }
    const artwork = data
      .sort(
        (a: Artwork, b: Artwork) =>
          a.createdAt.getTime() - b.createdAt.getTime()
      )
      .map((art: Artwork) => <ArtWorkPost artwork={art} key={art.id} />);
    return artwork;
  };

  return (
    <div>
      <div className="d-flex flex-column justify-content-center align-items-center gap-3">
        {status === "loading" && <h1>Loading art...</h1>}
        {status === "error" && (
          <h1 style={{ color: "var(--bs-danger)" }}>Error fetching art</h1>
        )}
        {data?.length == 0 && status !== "loading" && (
          <h1 style={{ color: "var(--bs-warning)" }}>No artwork available.</h1>
        )}
        {printArtwork()}
      </div>
    </div>
  );
}
