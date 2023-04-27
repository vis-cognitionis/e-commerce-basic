import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import { ProductCardProps } from "service/interface";
import useGetProducts from "service/useGetProducts";
import mainStore from "view-model/main_store";

export const usePaginatedProducts = () => {
  const { products } = useGetProducts();
  const location = useLocation();
  const navigate = useNavigate();

  const itemsPerPage = 12;

  //extracts the page parameter from the URL or sets it to 1 to get the page number
  const page = parseInt(
    new URLSearchParams(location.search).get("page") || "1"
  );

  const [currentPage, setCurrentPage] = useState<number>(page);

  //updates the current page number via the setCurrentPage hook and also updates the page number in the URL
  const handleChangePage = (
    event: React.ChangeEvent<unknown>,
    page: number
  ) => {
    setCurrentPage(page);
    navigate(`/?page=${page}`);
  };

  //all products from the data are firstly filtered here
  //these filter parameters are the product brand, model and search for the product name by search component
  //filters.length === 0 is required to display all products if no filters are selected
  const getFilteredProducts = (products: ProductCardProps[]) => {
    return products.filter((product) => {
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
  };

  //required to provide results when searching on different pages
  useEffect(() => {
    products && getFilteredProducts(products);
    setCurrentPage(1);
  }, [mainStore.searchName, mainStore.selectedFilters, products]);

  let filteredProductList = getFilteredProducts(products || []);

  //required to sort products according to the values of sort by component
  switch (mainStore.selectedItem) {
    case "price-low-to-high":
      filteredProductList = filteredProductList.sort(
        (a, b) => Number(a.price) - Number(b.price)
      );
      break;
    case "price-high-to-low":
      filteredProductList = filteredProductList.sort(
        (a, b) => Number(b.price) - Number(a.price)
      );
      break;
    case "new-to-old":
      filteredProductList = filteredProductList.sort((a, b) =>
        a.createdAt < b.createdAt ? 1 : -1
      );
      break;
    case "old-to-new":
      filteredProductList = filteredProductList.sort((a, b) =>
        a.createdAt > b.createdAt ? 1 : -1
      );
      break;
    default:
      break;
  }

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  //get the products that should be displayed on the current page
  const paginatedProductList = filteredProductList.slice(startIndex, endIndex);

  //calculate the total number of pages based on the number of products and items per page
  const pageCount = Math.ceil((filteredProductList.length || 0) / itemsPerPage);

  //required to update pagination by URL when doing back and forward in browser
  useEffect(() => {
    if (page <= pageCount) {
      setCurrentPage(page);
    }
  }, [location.search, pageCount, page]);

  const isProductNotFound = paginatedProductList.length === 0;

  return {
    paginatedProductList,
    pageCount,
    currentPage,
    handleChangePage,
    itemsPerPage,
    isProductNotFound,
  };
};
