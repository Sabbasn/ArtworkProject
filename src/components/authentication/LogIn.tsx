import { ChangeEvent, FormEvent, useContext, useState } from "react";
import AuthFormInput from "./AuthFormInput";
import { useNavigate } from "react-router-dom";
import AuthService from "../../services/AuthService";
import { AuthContext } from "../../App";

export default function LogIn() {
  const [loginData, setLoginData] = useState({});
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();
  const setAuthenticated = useContext(AuthContext);

  const authService = new AuthService();

  async function logIn(e: FormEvent) {
    e.preventDefault();
    const response = await authService.loginUser(loginData);
    if (response["success"]) {
      setAuthenticated(true);
      navigate("/");
    } else {
      setErrorMessage(response["message"]);
    }
  }

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    setLoginData({
      ...loginData,
      [e.target.name]: e.target.value,
    });
  }

  return (
    <div className="container" style={{ width: "600px", minWidth: "300px" }}>
      <div className="card p-3">
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
            <button type="submit" className="btn btn-primary" onClick={logIn}>
              Log In
            </button>
          </form>
          <p className="mt-3">
            Don't have an account?{" "}
            <span style={{ color: "var(--bs-primary)" }}>
              <a href="/register">Register</a>
            </span>
          </p>
          <p style={{ color: "var(--bs-warning)" }}>{errorMessage}</p>
        </div>
      </div>
    </div>
  );
}
