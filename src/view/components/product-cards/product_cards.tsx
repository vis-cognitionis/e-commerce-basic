import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Box, BoxProps, Stack, styled, StackProps } from "@mui/material";
import Pagination, { PaginationProps } from "@mui/material/Pagination";

import ProductCard from "core/components/cards/product_card";
import useGetProducts from "service/useGetProducts";
import LazyLoadingSkeleton from "core/components/lazy-loading/lazy_loading";
import { colors } from "core/contants/colors";

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

const ProductCards = () => {
  const { products, isLoading } = useGetProducts();
  const navigate = useNavigate();
  const location = useLocation();

  const itemsPerPage = 12;
  const pageCount = Math.ceil(
    ((products && products.length) || 0) / itemsPerPage
  );
  const page = parseInt(
    new URLSearchParams(location.search).get("page") || "1"
  );

  const [currentPage, setCurrentPage] = useState<number>(page);

  useEffect(() => {
    if (page <= pageCount) {
      setCurrentPage(page);
    }
  }, [location.search, pageCount]);

  const handleChangePage = (
    event: React.ChangeEvent<unknown>,
    page: number
  ) => {
    setCurrentPage(page);
    navigate(`/?page=${page}`);
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const paginatedProducts = products && products.slice(startIndex, endIndex);

  return (
    <Box position="relative">
      <ScrollContainer>
        <ProductCardsContainer>
          {isLoading
            ? Array(itemsPerPage).fill(
                <LazyLoadingSkeleton width={180} height={302} />
              )
            : paginatedProducts &&
              paginatedProducts.map((product) => {
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
        {!isLoading && (
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

export default ProductCards;
