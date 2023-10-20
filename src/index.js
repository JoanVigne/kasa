import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import APropos from "./pages/aPropos";
import Accueil from "./pages/accueil";
import Error404 from "./pages/error404";
import Logement from "./pages/logement";
import Layout from "./layout";

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
