import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
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
import mainStore from "view-model/main_store";
import { colors } from "core/contants/colors";
import Text from "core/components/typography/typography";

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

  const page = parseInt(
    new URLSearchParams(location.search).get("page") || "1"
  );

  const [currentPage, setCurrentPage] = useState<number>(page);

  const handleChangePage = (
    event: React.ChangeEvent<unknown>,
    page: number
  ) => {
    setCurrentPage(page);
    navigate(`/?page=${page}`);
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  let filteredProducts = products?.filter((product) => {
    const filters = mainStore.selectedFilters;
    const searchName = mainStore.searchName.toLowerCase();
    return (
      (filters.length === 0 ||
        filters.some(
          (filter) => product.brand === filter || product.model === filter
        )) &&
      (searchName === "" || product.name.toLowerCase().includes(searchName))
    );
  });

  switch (mainStore.selectedItem) {
    case "price-low-to-high":
      filteredProducts = filteredProducts?.sort(
        (a, b) => Number(a.price) - Number(b.price)
      );
      break;
    case "price-high-to-low":
      filteredProducts = filteredProducts?.sort(
        (a, b) => Number(b.price) - Number(a.price)
      );
      break;
    case "new-to-old":
      filteredProducts = filteredProducts?.sort((a, b) =>
        a.createdAt < b.createdAt ? 1 : -1
      );
      break;
    case "old-to-new":
      filteredProducts = filteredProducts?.sort((a, b) =>
        a.createdAt > b.createdAt ? 1 : -1
      );
      break;
    default:
      break;
  }

  const paginatedProducts = filteredProducts?.slice(startIndex, endIndex);

  const pageCount = Math.ceil(
    ((filteredProducts && filteredProducts.length) || 0) / itemsPerPage
  );

  useEffect(() => {
    if (page <= pageCount) {
      setCurrentPage(page);
    }
  }, [location.search, pageCount]);

  const isProductNotFound = paginatedProducts && paginatedProducts.length === 0;

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
            ? Array(itemsPerPage).fill(
                <LazyLoadingSkeleton width={180} height={302} />
              )
            : paginatedProducts &&
              paginatedProducts.map((product) => {
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
                      console.log(product.createdAt);
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

export default observer(ProductCards);
