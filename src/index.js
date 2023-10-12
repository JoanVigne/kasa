import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import APropos from "./pages/Apropos";
import Accueil from "./pages/Accueil";
import Error404 from "./pages/Error404";
import Layout from "./Layout";
import Logement from "./pages/Logement";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Accueil />,
      },
      {
        path: "/aPropos",
        element: <APropos />,
      },
      {
        path: "/logement/:id",
        element: <Logement />,
      },
      {
        path: "/*",
        element: <Error404 />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
