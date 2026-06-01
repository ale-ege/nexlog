import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { Analytics } from "@/components/Analytics";
import "./styles/globals.css";

const rootElement = document.getElementById("root");

if (!rootElement) {
  throw new Error("Elemento #root não encontrado no documento.");
}

createRoot(rootElement).render(
  <StrictMode>
    {/* Analytics injeta GTM + Clarity quando as envs estão definidas.
        Sem env, nada é carregado — zero impacto em dev. */}
    <Analytics />
    <App />
  </StrictMode>
);
