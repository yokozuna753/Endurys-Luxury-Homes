import { createBrowserRouter, Navigate } from "react-router-dom";
import Layout from "./Layout";
import HomePage from "../components/LandingPage/HomePage";
import MiamiDade from "../components/Properties/MiamidadeCounty/MiamiDade";
import Pinecrest from "../components/Properties/Pinecrest/Pinecrest";
import WestCoast from "../components/Properties/WestCoast/WestCoast";
import PropertyDetail from "../components/Properties/PropertyDetail/PropertyDetail";
import ContactPage from "../components/ContactPage/ContactPage";
import ShowcaseCustomHomes from "../components/ShowcaseCustomHomes/ShowcaseCustomHomes";
import CustomHomes from "../components/CustomHomes/CustomHomes";

export const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },

      {
        path: "/properties/miami-dade/:area/:id",
        element: <PropertyDetail />,
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
        path: "/properties/pinecrest/:area/:id",
        element: <PropertyDetail />,
      },
      {
        path: "/properties/westcoast",
        element: <WestCoast />,
      },
      {
        path: "/properties/westcoast/:area/:id",
        element: <PropertyDetail />,
      },
      {
        path: "/services/custom-homes",
        element: <CustomHomes />,
      },
      {
        path: "/our-work/showcase-custom-homes",
        element: <ShowcaseCustomHomes />,
      },
      {
        path: "/contact",
        element: <ContactPage />,
      },
    ],
  },
  {
    path: "*",
    element: <Navigate to="/" />,
  },
]);
