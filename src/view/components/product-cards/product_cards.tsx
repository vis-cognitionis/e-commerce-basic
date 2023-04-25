import React from "react";
import { Box, BoxProps, Skeleton, styled } from "@mui/material";

import ProductCard from "core/components/cards/product_card";
import useGetProducts from "service/useGetProducts";
import { useNavigate } from "react-router-dom";

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

function LazyLoadingSkeleton() {
  return <Skeleton variant="rectangular" width={180} height={302} />;
}

const ProductCards = () => {
  const { products, isLoading } = useGetProducts();
  const navigate = useNavigate();

  return (
    <ProductCardsContainer>
      {isLoading
        ? Array(12).fill(<LazyLoadingSkeleton />)
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
                  console.log("run");
                }}
              />
            );
          })}
    </ProductCardsContainer>
  );
};

export default ProductCards;
