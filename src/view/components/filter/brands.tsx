import React, { useState } from "react";
import { FormControlLabel, Stack } from "@mui/material";

import ContainerCard from "core/components/cards/container_card";
import useGetProducts from "service/useGetProducts";
import CheckboxButton from "core/components/buttons/checkbox_button";
import Text from "core/components/typography/typography";
import { IconSearch } from "core/components/icons/icons";
import { SearchBox, SearchInput, SearchContainer } from "./common/common";

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
        <Stack spacing={0.8}>
          <SearchBox>
            <IconSearch sx={{ width: "16px", height: "auto" }} />
            <SearchInput
              placeholder="Search"
              value={searchBrand}
              onChange={handleSearchChange}
            />
          </SearchBox>
          <SearchContainer>
            {searchedBrands.length > 0 ? (
              searchedBrands.map((item) => {
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
          </SearchContainer>
        </Stack>
      }
    />
  );
};
export default Brands;
