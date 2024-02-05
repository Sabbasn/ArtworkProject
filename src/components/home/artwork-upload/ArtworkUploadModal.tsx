import { ArtworkUploadModalForm } from "./ArtworkUploadModalForm";

export function ArtworkUploadModal() {
  return (
    <div
      className="modal fade"
      tabIndex={-1}
      id="artworkUploadModal"
      aria-labelledby="artworkUploadModal"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h3 className="modal-title">Upload Image</h3>
          </div>
          <div className="modal-body">
            <ArtworkUploadModalForm />
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Close
            </button>
            <button type="button" className="btn btn-primary">
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
