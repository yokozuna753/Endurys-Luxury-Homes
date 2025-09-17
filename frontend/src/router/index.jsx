import { createBrowserRouter } from "react-router-dom";
import Layout from "./Layout";
import HomePage from "../components/LandingPage/HomePage";
import MiamiDade from "../components/Properties/MiamiDadeCounty/LandingPage/MiamiDade";
import PineCrest from "../components/Properties/Pinecrest/LandingPage/HomePage";
import WestCoast from "../components/Properties/WestCoast/LandingPage/HomePage";

export const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/properties",
        children: [
          {
            path: "/miami-dade",
            element: <MiamiDade />
        },
          {
            path: "/miami-dade",
            element: <PineCrest />
        },
          {
            path: "/miami-dade",
            element: <WestCoast />
        },
      ],
      },
    ],
  },
]);
