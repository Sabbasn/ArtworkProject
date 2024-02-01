import { useState } from "react";

export function ArtworkUploadModalForm() {
  const [image, setImage] = useState("");

  const handleImageInput = (e: React.FormEvent<HTMLInputElement>) => {
    const imgFile = URL.createObjectURL(e.currentTarget.files![0]);
    console.log(imgFile);
    setImage(imgFile);
  };

  return (
    <form>
      <div className="mb-3">
        <label htmlFor="imageTitle" className="form-label">
          Title
        </label>
        <input type="text" className="form-control" id="imageTitle" />
      </div>
      <div className="mb-3">
        <label htmlFor="imageDescription" className="form-label">
          Description
        </label>
        <input type="text" className="form-control" id="imageDescription" />
      </div>
      <div className="mb-3 input-group">
        <input
          type="file"
          accept="image/png, image/jpeg"
          className="form-control"
          id="imageUpload"
          onInput={(e) => handleImageInput(e)}
        />
        <label htmlFor="imageUpload" className="input-group-text">
          Image
        </label>
        <img src={image} className="img-fluid p-3" />
      </div>
    </form>
  );
}
