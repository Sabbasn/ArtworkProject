import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./scss/styles.scss";
import "bootstrap-icons/font/bootstrap-icons.css";

import App from "./App.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
