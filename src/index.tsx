import "@/index.scss";
import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import StoreProvider from "./components/StoreProvider";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <StoreProvider>
      <App />
    </StoreProvider>
  </StrictMode>,
);
