import { createBrowserRouter } from "react-router-dom";
import Layout from "./Layout";
import HomePage from "../components/LandingPage/HomePage";
import MiamiDade from "../components/Properties/MiamidadeCounty/MiamiDade";
import Pinecrest from "../components/Properties/Pinecrest/Pinecrest";
import WestCoast from "../components/Properties/WestCoast/WestCoast";

export const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },

      {
        path: "/properties/miami-dade",
        element: <MiamiDade />,
      },
      {
        path: "/properties/pinecrest",
        element: <Pinecrest />,
      },
      {
        path: "/properties/westcoast",
        element: <WestCoast />,
      },
    ],
  },
]);
