import React from "react";
import { Box, BoxProps, Stack, styled } from "@mui/material";

import AllFilter from "view/components/filter/_index";
import ProductCard from "core/components/cards/product_card";

const ProductCardsContainer = styled(Box)<BoxProps>(() => ({
  display: "flex",
  flexDirection: "row",
  flexWrap: "wrap",
  columnGap: "30px",
  rowGap: "26px",
}));

const Home = () => {
  return (
    <Stack direction="row" gap={3.5}>
      <AllFilter />
      <ProductCardsContainer>
        {Array(12).fill(<ProductCard info="Iphone" price="15.000₺" image="" />)}
      </ProductCardsContainer>
    </Stack>
  );
};

export default Home;
