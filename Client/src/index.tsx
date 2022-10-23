import React from "react";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "typeface-roboto";
import 'bootstrap/dist/css/bootstrap.css';


import App from "./App";

const rootElement = document.getElementById("root");

if (!rootElement) {
  throw new Error('Failed to find the root element')
}

const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);