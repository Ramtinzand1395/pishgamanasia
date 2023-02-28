import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { ToastContainer } from "react-toastify";

import App from "./App";

import "./index.css";
import "react-toastify/dist/ReactToastify.css";
import "leaflet/dist/leaflet.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HelmetProvider>
      <BrowserRouter>
        <ToastContainer rtl={true} position={"top-right"} theme={"colored"} />
        <App />
      </BrowserRouter>
    </HelmetProvider>
  </React.StrictMode>
);
