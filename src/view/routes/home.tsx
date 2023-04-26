import React from "react";
import { Stack } from "@mui/material";

import AllFilter from "view/components/filter/_index";
import ProductCardList from "view/components/product-card-list/product_card_list";

const Home = () => {
  return (
    <Stack direction="row" gap={3.5}>
      <AllFilter />
      <ProductCardList />
    </Stack>
  );
};

export default Home;
