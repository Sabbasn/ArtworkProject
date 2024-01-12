import ArtWorkPost from "./ArtworkPost";
import ArtworkSortButton from "./ArtworkSortButton";

export default function Home() {
  const artworkSamples: Artwork[] = [
    {
      artistName: "Daisy Dodd",
      description: "Artwork of two trees in a valley",
      imgUrl:
        "https://www.creativeboom.com/uploads/articles/98/980eacc2ffdea8f6c69cd88f42703f31cde5abda_810.jpg",
      title: "Tree",
      dateUploaded: new Date(Date.parse("2001.07.23")),
    },
    {
      artistName: "???",
      description: "Desert or something",
      imgUrl:
        "https://14d14a1b70be1f7f7d4a-0863ae42a3340022d3e557e78745c047.ssl.cf5.rackcdn.com/20652_w.jpg",
      title: "Tree",
      dateUploaded: new Date(),
    },
    {
      artistName: "Daisy Dodd",
      description: "Artwork of two trees in a valley",
      imgUrl:
        "https://www.creativeboom.com/uploads/articles/98/980eacc2ffdea8f6c69cd88f42703f31cde5abda_810.jpg",
      title: "Tree",
      dateUploaded: new Date(Date.parse("1975.10.14")),
    },
  ];

  return (
    <div className="container p-3">
      <div className="d-flex justify-content-center gap-3">
        <h1>Artwork</h1>
        <ArtworkSortButton />
      </div>
      <div className="card-body d-flex flex-column gap-3">
        {artworkSamples
          .sort((a, b) => a.dateUploaded.getTime() - b.dateUploaded.getTime())
          .map((art) => (
            <ArtWorkPost artwork={art} />
          ))}
      </div>
    </div>
  );
}
