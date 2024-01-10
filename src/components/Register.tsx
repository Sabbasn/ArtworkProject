import { useState } from "react";
import FormInput from "./FormInput";

export default function Register() {
  const [registerInfo, setRegisterInfo] = useState([]);

  return (
    <div className="container" style={{ width: "600px", minWidth: "300px" }}>
      <div className="card">
        <div className="card-top">
          <h1 className="card-title mb-3">Register</h1>
        </div>
        <div className="card-body">
          <FormInput name="Username" type="text" />
          <FormInput name="Password" type="password" />
          <button className="btn btn-primary">Register</button>
          <p className="mt-3">
            <a>
              Already have an account?{" "}
              <span style={{ color: "var(--bs-primary)" }}>
                <a href="/">Log In</a>
              </span>
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
