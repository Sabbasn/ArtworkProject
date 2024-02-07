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
        </div>
      </div>
    </div>
  );
}
