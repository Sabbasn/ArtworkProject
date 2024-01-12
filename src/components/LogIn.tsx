import { FormEvent } from "react";
import AuthService from "../services/AuthService";
import AuthFormInput from "./AuthFormInput";
import "./Login.css";

interface LogInProps {
  authService: AuthService;
}

export default function LogIn(props: LogInProps) {
  const _authService = props.authService;

  function logIn(e: FormEvent) {
    e.preventDefault();
    _authService.loginUser({});
  }

  return (
    <div className="container" style={{ width: "600px", minWidth: "300px" }}>
      <div className="card">
        <div className="card-top">
          <h1 className="card-title mb-3">Log In</h1>
        </div>
        <div className="card-body">
          <form onSubmit={logIn}>
            <AuthFormInput name="Username" type="text" />
            <AuthFormInput name="Password" type="password" />
            <button className="btn btn-primary" onClick={logIn}>
              Log In
            </button>
          </form>
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
