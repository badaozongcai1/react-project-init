import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import ButtonUsage from "@pages/App";
const container = document.getElementById("app");

if (!container) {
  throw new Error("Failed to find the root element");
}

const root = createRoot(container);

root.render(
  <React.StrictMode>
    <div className="underline">React Hello </div>
    <ButtonUsage></ButtonUsage>
  </React.StrictMode>
);
