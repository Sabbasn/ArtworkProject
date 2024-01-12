import { ChangeEvent, FormEvent, useState } from "react";
import AuthService from "../services/AuthService";
import AuthFormInput from "./AuthFormInput";
import "./Login.css";

interface LogInProps {
  authService: AuthService;
}

export default function LogIn(props: LogInProps) {
  const _authService = props.authService;
  const [loginData, setLoginData] = useState([]);

  function logIn(e: FormEvent) {
    e.preventDefault();
    console.log(loginData);
    _authService.loginUser({ loginData });
  }

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    setLoginData({
      ...loginData,
      [e.target.name]: e.target.value,
    });
  }

  return (
    <div className="container" style={{ width: "600px", minWidth: "300px" }}>
      <div className="card">
        <div className="card-top">
          <h1 className="card-title mb-3">Log In</h1>
        </div>
        <div className="card-body">
          <form onSubmit={logIn}>
            <AuthFormInput
              name="Username"
              type="text"
              onChange={handleChange}
            />
            <AuthFormInput
              name="Password"
              type="password"
              onChange={handleChange}
            />
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
