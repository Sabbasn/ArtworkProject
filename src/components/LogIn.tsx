export default function LogIn() {
  return (
    <>
      <div className="container" style={{ width: "600px", minWidth: "300px" }}>
        <div className="card">
          <div className="card-top">
            <h1 className="card-title">Log In</h1>
          </div>
          <div className="card-body">
            <div className="input-group flex-nowrap">
              <span className="input-group-text" id="username-wrapping">
                @
              </span>
              <input
                type="text"
                className="form-control"
                placeholder="Username"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
