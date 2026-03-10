import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import Lab1 from "./pages/lab1";
import "./index.css";
import App from "./App";
import "antd/dist/reset.css";
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      {/* <App /> */}
      <Lab1/>
    </BrowserRouter>
  </StrictMode>
);
