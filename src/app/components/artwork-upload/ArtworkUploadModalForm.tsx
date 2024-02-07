import { useState } from "react";
import "./ArtworkUploadModalForm.css";
import { useMutation } from "react-query";
import { fetchPostArtwork } from "@services/ArtworkService";

export function ArtworkUploadModalForm() {
  const [image, setImage] = useState<string>("");
  const mutation = useMutation({
    mutationFn: fetchPostArtwork,
    onSuccess: () => console.log("Success!"),
  });

  const handleImageInput = (e: React.FormEvent<HTMLInputElement>) => {
    const reader = new FileReader();
    reader.readAsDataURL(e.currentTarget.files![0]);
    reader.onload = () => {
      const result = reader.result;
      if (result === undefined) {
        console.error("Can not read image as base64!");
        return;
      }
      setImage(reader.result!.toString());
    };
  };

  const handleSubmit = (formData: FormData) => {
    formData.set("fileData", image);
    mutation.mutate(formData);
    window.location.reload();
  };

  return (
    <form action={handleSubmit}>
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
      <div className="modal-footer">
        <button
          type="button"
          className="btn btn-secondary artwork-upload-modal-btn"
          data-bs-dismiss="modal"
        >
          Close
        </button>
        <button
          type="submit"
          className="btn btn-primary artwork-upload-modal-btn"
        >
          Submit
        </button>
      </div>
    </form>
  );
}
