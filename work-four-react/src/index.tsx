import ReactDom from "react-dom/client";
import React from "react";
import App from "./App";
import "./styles/style.css";

ReactDom.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
