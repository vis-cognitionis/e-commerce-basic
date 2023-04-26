import React, { useState } from "react";
import {
  FormControlLabel,
  Stack,
  styled,
  StackProps,
  InputBase,
  Box,
  BoxProps,
  InputBaseProps,
} from "@mui/material";

import ContainerCard from "core/components/cards/container_card";
import useGetProducts from "service/useGetProducts";
import CheckboxButton from "core/components/buttons/checkbox_button";
import Text from "core/components/typography/typography";
import { colors } from "core/contants/colors";
import { IconSearch } from "core/components/icons/icons";

const BrandsContainer = styled(Stack)<StackProps>(() => ({
  width: "100%",
  height: "83px",
  maxHeight: "83px",
  overflowX: "hidden",
  overflowY: "scroll",
  gap: "12px",

  "&::-webkit-scrollbar": {
    width: "4px",
  },
  "&::-webkit-scrollbar-thumb:vertical": {
    borderRadius: "20px",
    backgroundColor: colors.gray,
  },
  "&::-webkit-scrollbar-track:vertical": {
    backgroundColor: "transparent",
  },
}));

const SearchBox = styled(Box)<BoxProps>(() => ({
  display: "flex",
  alignItems: "center",
  backgroundColor: colors.lightGray,
  padding: "8px 8px 8px 12px",
  gap: "10px",
  width: "190px",
  height: "40px",
  boxSizing: "border-box",
}));

const SearchInput = styled(InputBase)<InputBaseProps>(() => ({
  width: "100%",
  height: "100%",
  fontSize: "14px",
  color: colors.textDark,
  fontFamily: "Montserrat",
}));

const Brands = () => {
  const { products } = useGetProducts();
  const [searchBrand, setSearchBrand] = useState<string>("");

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchBrand(event.target.value);
  };

  const searchedBrands = products
    ? products.filter((item) =>
        item.brand.toLowerCase().includes(searchBrand.toLowerCase())
      )
    : [];

  return (
    <ContainerCard
      title="Brands"
      children={
        <Stack spacing={1}>
          <SearchBox>
            <IconSearch sx={{ width: "16px", height: "auto" }} />
            <SearchInput
              placeholder="Search"
              value={searchBrand}
              onChange={handleSearchChange}
            />
          </SearchBox>
          <BrandsContainer>
            {searchedBrands.length > 0 ? (
              searchedBrands.map((item) => {
                console.log(searchedBrands.length);
                return (
                  <FormControlLabel
                    key={item.id}
                    sx={{ marginLeft: 0 }}
                    control={<CheckboxButton key={item.id} />}
                    label={
                      <Text
                        sx={{ paddingLeft: "8px" }}
                        variant="body2"
                        content={item.brand}
                      />
                    }
                  />
                );
              })
            ) : (
              <Text variant="body2" content="No brands found" />
            )}
          </BrandsContainer>
        </Stack>
      }
    />
  );
};
export default Brands;
