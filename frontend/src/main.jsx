import React from "react";
import "./index.css";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import {router} from './router';
import { LoadScript } from "@react-google-maps/api";

const apiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <LoadScript googleMapsApiKey={apiKey} libraries={["places"]}>
      <RouterProvider router={router} />
    </LoadScript>
  </React.StrictMode>
);

