const API_URL: string = "https://localhost:7280/api/image";

export const fetchArtwork = async (): Promise<Artwork[]> => {
  const response = await fetch(API_URL, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "https://localhost:7280",
    },
  });
  const json = await response.json();
  const artwork: Artwork[] = json["data"]["imageDTOs"];
  return artwork;
};
