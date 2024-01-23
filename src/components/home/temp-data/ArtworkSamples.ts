export default function ArtworkSamples() {
  const artworkSamples: Artwork[] = [
    {
      id: "0",
      artistName: "Daisy Dodd",
      description: "Artwork of two trees in a valley",
      imgUrl:
        "https://www.creativeboom.com/uploads/articles/98/980eacc2ffdea8f6c69cd88f42703f31cde5abda_810.jpg",
      title: "Tree",
      dateUploaded: new Date(Date.parse("2001.07.23")),
    },
    {
      id: "1",
      artistName: "???",
      description: "Desert or something",
      imgUrl:
        "https://14d14a1b70be1f7f7d4a-0863ae42a3340022d3e557e78745c047.ssl.cf5.rackcdn.com/20652_w.jpg",
      title: "Desert",
      dateUploaded: new Date(),
    },
    {
      id: "2",
      artistName: "???",
      description: "Pop!",
      imgUrl:
        "https://tse3.mm.bing.net/th/id/OIP.4CFUoDs1_C1S2hLM4Z_HTAHaHa?rs=1&pid=ImgDetMain",
      title: "Pop!",
      dateUploaded: new Date(Date.parse("1975.10.14")),
    },
    {
      id: "3",
      artistName: "Some italian guy",
      dateUploaded: new Date(),
      description: "Some description that describes the artwork",
      imgUrl:
        "https://www.matthiesengallery.com/wp-content/uploads/2016/10/Birmingham-annunciation653.jpg",
      title: "Baroque Art",
    },
  ];
  return artworkSamples;
}
