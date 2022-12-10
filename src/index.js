import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

import { BurgerMenuToggleProvider } from "./contexts/toggleContext";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <BurgerMenuToggleProvider>
      <App />
    </BurgerMenuToggleProvider>
  </BrowserRouter>
);
