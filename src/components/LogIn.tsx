import AuthService from "../services/AuthService";
import FormInput from "./FormInput";
import "./Login.css";

export default function LogIn() {
  const _authService: AuthService = new AuthService();

  function logIn() {
    _authService.loginUser({});
  }

  return (
    <div className="container" style={{ width: "600px", minWidth: "300px" }}>
      <div className="card">
        <div className="card-top">
          <h1 className="card-title mb-3">Log In</h1>
        </div>
        <div className="card-body">
          <FormInput name="Username" type="text" />
          <FormInput name="Password" type="password" />
          <button className="btn btn-primary" onClick={logIn}>
            Log In
          </button>
          <p className="mt-3">
            Don't have an account?{" "}
            <span style={{ color: "var(--bs-primary)" }}>
              <a href="/register">Register</a>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
