import React from "react";
import { Stack } from "@mui/material";

import AllFilter from "view/components/filter/_index";
import ProductCards from "view/components/product-cards/product_cards";

const Home = () => {
  return (
    <Stack direction="row" gap={3.5}>
      <AllFilter />
      <ProductCards />
    </Stack>
  );
};

export default Home;
