import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Button from "@mui/material/Button";
import Button1 from "@components/ui/Button";
const container = document.getElementById("app");

if (!container) {
  throw new Error("Failed to find the root element");
}

const root = createRoot(container);

root.render(
  <React.StrictMode>
    <div className="underline">React Hello </div>
    <Button variant="contained">mui Button</Button>
    <Button1>二封mui button</Button1>
  </React.StrictMode>
);
