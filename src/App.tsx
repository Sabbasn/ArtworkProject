import "./App.css";
import LogIn from "./components/LogIn";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "./components/Register";
import AuthService from "./services/AuthService";

function App() {
  const _authService: AuthService = new AuthService();
  return (
    <div className="h-100 d-flex align-items-center justify-content-center">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LogIn authService={_authService} />} />
          <Route
            path="register"
            element={<Register authService={_authService} />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
