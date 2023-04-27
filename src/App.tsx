import React, { Suspense, lazy } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { QueryClientProvider } from "@tanstack/react-query";
import { CircularProgress } from "@mui/material";

import Root from "view/routes/root";
import CartProvider from "contexts/cart_context";
import NotFound from "view/routes/not_found";
import { queryClient } from "service/query_client";

const Home = lazy(() => import("view/routes/home"));
const Detail = lazy(() => import("view/routes/detail"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: (
          <Suspense fallback={<CircularProgress />}>
            <Home />
          </Suspense>
        ),
      },
      {
        path: "detail/:id",
        element: (
          <Suspense fallback={<CircularProgress />}>
            <Detail />
          </Suspense>
        ),
      },
    ],
  },
]);

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <CartProvider>
        <RouterProvider router={router} />
      </CartProvider>
    </QueryClientProvider>
  );
}

export default App;
