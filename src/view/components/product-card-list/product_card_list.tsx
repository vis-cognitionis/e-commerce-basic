import React from "react";
import { useNavigate } from "react-router-dom";
import {
  Box,
  BoxProps,
  Stack,
  styled,
  StackProps,
  Pagination,
  PaginationProps,
} from "@mui/material";
import { observer } from "mobx-react";

import ProductCard from "core/components/cards/product_card";
import useGetProducts from "service/useGetProducts";
import LazyLoadingSkeleton from "core/components/lazy-loading/lazy_loading";
import Text from "core/components/typography/typography";
import { usePaginatedProducts } from "custom-hook/usePaginatedProducts";
import { colors } from "core/contants/colors";
import { useCart } from "contexts/cart_context";

const ProductCardsContainer = styled(Box)<BoxProps>(() => ({
  display: "flex",
  flexDirection: "row",
  flexWrap: "wrap",
  columnGap: "30px",
  rowGap: "26px",
  paddingBottom: "100px",
  boxSizing: "border-box",
}));

const ScrollContainer = styled(Stack)<StackProps>(() => ({
  maxHeight: "80vh",
  height: "auto",
  overflowX: "hidden",
  overflowY: "auto",
  "&::-webkit-scrollbar": {
    display: "none",
  },
  scrollBehavior: "smooth",
}));

const PaginationContainer = styled(Box)<BoxProps>(({ theme }) => ({
  position: "absolute",
  display: "flex",
  justifySelf: "center",
  alignSelf: "center",
  bottom: 0,
  marginTop: 120,
  [theme.breakpoints.down(1565)]: {
    bottom: -100,
  },
}));

const CustomPagination = styled(Pagination)<PaginationProps>(() => ({
  "& .MuiPaginationItem-root": {
    color: colors.gray,
    fontFamily: "Montserrat",
  },
  "& .Mui-selected": {
    color: colors.primary,
    backgroundColor: colors.background,
    boxShadow: "0px 0px 10px rgba(162, 170, 180, 0.25)",
    borderRadius: "6px",
    "&:hover": {
      backgroundColor: colors.background,
    },
  },
}));

const ProductCardList = () => {
  const {
    paginatedProductList,
    pageCount,
    currentPage,
    handleChangePage,
    itemsPerPage,
    isProductNotFound,
  } = usePaginatedProducts();

  const navigate = useNavigate();
  const { isLoading } = useGetProducts();
  const { addToCart } = useCart();

  return isProductNotFound ? (
    <Text
      variant="body1"
      sx={{ textAlign: "center", mt: 2, color: colors.warning }}
      content="No result!"
    />
  ) : (
    <Box position="relative">
      <ScrollContainer>
        <ProductCardsContainer>
          {isLoading
            ? Array.from({ length: itemsPerPage }, (_, index) => (
                <LazyLoadingSkeleton key={index} width={180} height={302} />
              ))
            : paginatedProductList &&
              paginatedProductList.map((product) => {
                return (
                  <ProductCard
                    key={product.id}
                    info={
                      product.name + " " + product.brand + " " + product.model
                    }
                    price={product.price}
                    image={product.image}
                    onClickCard={() => {
                      navigate(`/detail/${product.id}`);
                    }}
                    onClickButton={() => {
                      addToCart(product);
                    }}
                  />
                );
              })}
        </ProductCardsContainer>

        {!isLoading && pageCount > 1 && (
          <PaginationContainer>
            <CustomPagination
              count={pageCount}
              page={currentPage}
              onChange={handleChangePage}
              shape="rounded"
            />
          </PaginationContainer>
        )}
      </ScrollContainer>
    </Box>
  );
};

export default observer(ProductCardList);
