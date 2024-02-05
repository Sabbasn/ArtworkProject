import { useState } from "react";
import "./ArtworkUploadModalForm.css";

export function ArtworkUploadModalForm() {
  const [image, setImage] = useState("");

  const handleImageInput = (e: React.FormEvent<HTMLInputElement>) => {
    const imgFile = URL.createObjectURL(e.currentTarget.files![0]);
    setImage(imgFile);
  };

  return (
    <form>
      <div className="mb-3">
        <label htmlFor="imageTitle" className="form-label">
          Title
        </label>
        <input
          name="title"
          type="text"
          className="form-control"
          id="imageTitle"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="imageDescription" className="form-label">
          Description
        </label>
        <input
          name="description"
          type="text"
          className="form-control"
          id="imageDescription"
        />
      </div>
      <div className="mb-3 input-group">
        <input
          name="fileData"
          type="file"
          accept="image/png, image/jpeg"
          className="form-control"
          id="imageUpload"
          onInput={(e) => handleImageInput(e)}
        />
        <img
          src={image}
          className="img-fluid rounded artwork-upload-img mt-3"
        />
      </div>
    </form>
  );
}
