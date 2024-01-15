import { ChangeEvent, FormEvent, useState } from "react";
import AuthFormInput from "./AuthFormInput";
import AuthService from "../../services/AuthService";
import { useNavigate } from "react-router-dom";

interface RegisterProps {
  authService: AuthService;
}

export default function Register(props: RegisterProps) {
  const _authService = props.authService;

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    username: "",
    password: "",
    confirmPassword: "",
  });

  const [errorMessage, setErrorMessage] = useState("");

  async function register(e: FormEvent) {
    e.preventDefault();
    const response = await _authService.registerUser(formData);
    setErrorMessage(response["errors"][0]["description"]);
    if (response["succeeded"]) {
      navigate("/login");
    }
  }

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  return (
    <div className="container" style={{ width: "600px", minWidth: "300px" }}>
      <div className="card p-3">
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
          <p style={{ color: "var(--bs-warning)" }}>{errorMessage}</p>
        </div>
      </div>
    </div>
  );
}
