
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import AppRoutes from "./AppRoutes";

createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <AppRoutes />
  </StrictMode>,
);
