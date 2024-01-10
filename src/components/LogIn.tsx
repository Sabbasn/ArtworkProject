import FormInput from "./FormInput";

export default function LogIn() {
  return (
    <div className="container" style={{ width: "600px", minWidth: "300px" }}>
      <div className="card">
        <div className="card-top">
          <h1 className="card-title mb-3">Artwork Project</h1>
        </div>
        <div className="card-body">
          <FormInput name="Username" type="text" />
          <FormInput name="Password" type="password" />
          <button className="btn btn-primary">Log In</button>
          <p className="mt-3">
            <a>
              Don't have an account?{" "}
              <span style={{ color: "var(--bs-primary)" }}>
                <a href="/register">Register here</a>
              </span>
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
