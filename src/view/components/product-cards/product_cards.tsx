import React from "react";
import { Box, BoxProps, styled } from "@mui/material";
import { useNavigate } from "react-router-dom";

import ProductCard from "core/components/cards/product_card";
import useGetProducts from "service/useGetProducts";
import LazyLoadingSkeleton from "core/components/lazy-loading/lazy_loading";

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

const ProductCards = () => {
  const { products, isLoading } = useGetProducts();
  const navigate = useNavigate();

  return (
    <ProductCardsContainer>
      {isLoading
        ? Array(12).fill(<LazyLoadingSkeleton width={180} height={302} />)
        : products &&
          products.map((product) => {
            return (
              <ProductCard
                key={product.id}
                info={product.brand + " " + product.model}
                price={product.price}
                image={product.image}
                onClickCard={() => {
                  navigate(`/detail/${product.id}`);
                }}
                onClickButton={() => {
                  console.log(product.id);
                }}
              />
            );
          })}
    </ProductCardsContainer>
  );
};

export default ProductCards;
