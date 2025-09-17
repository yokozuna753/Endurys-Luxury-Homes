import React from "react";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import HomePage from "./components/LandingPage/HomePage.jsx";
import Layout from "./router/Layout.jsx";
import "./index.css";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router/dom";
import {router} from './router'

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>
);

