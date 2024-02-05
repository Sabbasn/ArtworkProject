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

export const fetchPostArtwork = async (form: FormData): Promise<[]> => {
  try {
    const body = {
      fileData: form.get("fileData")!.toString(),
      title: form.get("title")!.toString(),
      description: form.get("description")!.toString(),
    };
    const response = await fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "https://localhost:7280",
      },
      body: JSON.stringify(body),
    });
    const json = response.json();
    return json;
  } catch (e: unknown) {
    console.warn(e);
    return [];
  }
};
