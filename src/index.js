import React from "react";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { hydrateRoot, render } from "react-dom";



const APP = (
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

const rootElement = document.getElementById("root");


if (rootElement.hasChildNodes()) {
  hydrateRoot(APP, rootElement);
} else {
  render(APP, rootElement);
}
