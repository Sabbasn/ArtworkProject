import { ChangeEvent, FormEvent, useState } from "react";
import AuthFormInput from "./AuthFormInput";
import AuthService from "../services/AuthService";

interface RegisterProps {
  authService: AuthService;
}

export default function Register(props: RegisterProps) {
  const _authService = props.authService;

  const [formData, setFormData] = useState({
    username: "",
    password: "",
    confirmPassword: "",
  });

  function register(e: FormEvent) {
    e.preventDefault();
    _authService.registerUser(formData);
  }

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  return (
    <div className="container" style={{ width: "600px", minWidth: "300px" }}>
      <div className="card">
        <div className="card-top">
          <h1 className="card-title mb-3">Register</h1>
        </div>
        <div className="card-body">
          <form onSubmit={register}>
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
            <AuthFormInput
              name="Confirm Password"
              type="password"
              onChange={handleChange}
            />
            <button type="submit" className="btn btn-primary">
              Register
            </button>
          </form>
          <p className="mt-3">
            Already have an account?{" "}
            <span style={{ color: "var(--bs-primary)" }}>
              <a href="/">Log In</a>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
