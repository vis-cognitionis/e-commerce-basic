import React from "react";
import Header from "./view/components/header";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Root from "view/routes/root";
import Home from "view/routes/home";
import Detail from "view/routes/detail";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "detail",
        element: <Detail />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
