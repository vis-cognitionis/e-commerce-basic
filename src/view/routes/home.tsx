import React from "react";
import { Box, BoxProps, Stack, styled } from "@mui/material";

import AllFilter from "view/components/filter/_index";
import ProductCard from "core/components/cards/product_card";
import useGetProducts from "service/useGetProducts";

const ProductCardsContainer = styled(Box)<BoxProps>(() => ({
  display: "flex",
  flexDirection: "row",
  flexWrap: "wrap",
  columnGap: "30px",
  rowGap: "26px",
  height: "auto",
  maxHeight: "80vh",
  paddingBottom: "100px",
  boxSizing: "border-box",
  overflowX: "hidden",
  overflowY: "auto",
  "&::-webkit-scrollbar": {
    display: "none",
  },
  scrollBehavior: "smooth",
}));

const Home = () => {
  const { products } = useGetProducts();

  return (
    <Stack direction="row" gap={3.5}>
      <AllFilter />
      <ProductCardsContainer>
        {products &&
          products.map((product) => {
            return (
              <ProductCard
                key={product.id}
                info={product.brand + " " + product.model}
                price={product.price}
                image={product.image}
              />
            );
          })}
      </ProductCardsContainer>
    </Stack>
  );
};

export default Home;
