import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter } from "react-router";
import { RoutesApp } from "./routes/index.tsx";
import { HelmetProvider } from "react-helmet-async";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <HelmetProvider>
      <BrowserRouter>
        <RoutesApp />
      </BrowserRouter>
    </HelmetProvider>
  </StrictMode>
);
