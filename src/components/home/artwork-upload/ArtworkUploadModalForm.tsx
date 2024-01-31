export function ArtworkUploadModalForm() {
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
        />
        <label htmlFor="imageUpload" className="input-group-text">
          Image
        </label>
      </div>
    </form>
  );
}
