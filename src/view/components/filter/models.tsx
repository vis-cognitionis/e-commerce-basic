import React, { useState } from "react";
import { FormControlLabel, Stack } from "@mui/material";

import ContainerCard from "core/components/cards/container_card";
import useGetProducts from "service/useGetProducts";
import CheckboxButton from "core/components/buttons/checkbox_button";
import Text from "core/components/typography/typography";
import { IconSearch } from "core/components/icons/icons";
import { SearchBox, SearchContainer, SearchInput } from "./common/common";

const Models = () => {
  const { products } = useGetProducts();
  const [searchModel, setSearchModel] = useState<string>("");

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchModel(event.target.value);
  };

  const searchedModels = products
    ? products.filter((item) =>
        item.brand.toLowerCase().includes(searchModel.toLowerCase())
      )
    : [];

  return (
    <ContainerCard
      title="Models"
      children={
        <Stack spacing={1}>
          <SearchBox>
            <IconSearch sx={{ width: "16px", height: "auto" }} />
            <SearchInput
              placeholder="Search"
              value={searchModel}
              onChange={handleSearchChange}
            />
          </SearchBox>
          <SearchContainer>
            {searchedModels.length > 0 ? (
              searchedModels.map((item) => {
                return (
                  <FormControlLabel
                    key={item.id}
                    sx={{ marginLeft: 0 }}
                    control={<CheckboxButton key={item.id} />}
                    label={
                      <Text
                        sx={{ paddingLeft: "8px" }}
                        variant="body2"
                        content={item.model}
                      />
                    }
                  />
                );
              })
            ) : (
              <Text variant="body2" content="No models found" />
            )}
          </SearchContainer>
        </Stack>
      }
    />
  );
};
export default Models;
