import React, { useState } from "react";
import { FormControlLabel, Stack } from "@mui/material";
import { observer } from "mobx-react";

import ContainerCard from "core/components/cards/container_card";
import useGetProducts, { ProductCardProps } from "service/useGetProducts";
import CheckboxButton from "core/components/buttons/checkbox_button";
import Text from "core/components/typography/typography";
import mainStore from "view-model/main_store";
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

  const handleBrandClick = (brand: string) => {
    if (mainStore.selectedBrands.includes(brand)) {
      mainStore.setSelectedBrands(
        mainStore.selectedBrands.filter((item) => item !== brand)
      );
    } else {
      mainStore.setSelectedBrands([...mainStore.selectedBrands, brand]);
    }
  };

  // required to show the same brand names as unique in the user interface
  const uniqueBrands = [...new Set(searchedBrands.map((item) => item.brand))];

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
            {uniqueBrands.length > 0 ? (
              uniqueBrands.map((brand, imdex) => {
                return (
                  <FormControlLabel
                    key={imdex}
                    sx={{ marginLeft: 0 }}
                    control={
                      <CheckboxButton
                        key={imdex}
                        checked={mainStore.selectedBrands.includes(brand)}
                        onClick={() => handleBrandClick(brand)}
                      />
                    }
                    label={
                      <Text
                        sx={{ paddingLeft: "8px" }}
                        variant="body2"
                        content={brand}
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
export default observer(Brands);
