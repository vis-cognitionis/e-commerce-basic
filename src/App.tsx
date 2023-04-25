import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import Root from "view/routes/root";
import Home from "view/routes/home";
import Detail from "view/routes/detail";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "service/query_client";

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
        path: "detail/:id",
        element: <Detail />,
      },
    ],
  },
]);

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
}

export default App;
