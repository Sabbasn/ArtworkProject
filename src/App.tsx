import { Outlet } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="container h-100 d-flex justify-content-center align-items-center">
      <div>
        <h1>ArtworkProject</h1>
        <p className="fst-italic">A go to place for the modern artist</p>
      </div>
      <Outlet />
    </div>
  );
}

export default App;
