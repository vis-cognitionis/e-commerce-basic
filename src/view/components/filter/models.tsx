import React, { useState } from "react";
import { FormControlLabel, Stack } from "@mui/material";
import { useNavigate, useLocation } from "react-router-dom";
import { observer } from "mobx-react";

import ContainerCard from "core/components/cards/container_card";
import useGetProducts from "service/useGetProducts";
import CheckboxButton from "core/components/buttons/checkbox_button";
import mainStore from "view-model/main_store";
import Text from "core/components/typography/typography";
import { SearchBox, SearchContainer, SearchInput } from "./common/common";
import { IconSearch } from "core/components/icons/icons";

const Models = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { products } = useGetProducts();
  const [searchModel, setSearchModel] = useState<string>("");

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchModel(event.target.value);
  };

  const searchedModels = products
    ? products.filter((item) =>
        item.model.toLowerCase().includes(searchModel.toLowerCase())
      )
    : [];

  // required to show the same model names as unique in the user interface
  const uniqueModels = [...new Set(searchedModels.map((item) => item.model))];

  const handleModelClick = (model: string) => {
    if (mainStore.selectedFilters.includes(model)) {
      mainStore.setSelectedFilters(
        mainStore.selectedFilters.filter((item) => item !== model)
      );
    } else {
      mainStore.setSelectedFilters([...mainStore.selectedFilters, model]);
    }
    const newSearchParams = new URLSearchParams(location.search);
    newSearchParams.set("page", "1");
    navigate(`${location.pathname}?${newSearchParams.toString()}`);
  };

  return (
    <ContainerCard
      title="Model"
      children={
        <Stack spacing={0.8}>
          <SearchBox>
            <IconSearch sx={{ width: "16px", height: "auto" }} />
            <SearchInput
              placeholder="Search"
              value={searchModel}
              onChange={handleSearchChange}
            />
          </SearchBox>
          <SearchContainer>
            {uniqueModels.length > 0 ? (
              uniqueModels.map((model, index) => {
                return (
                  <FormControlLabel
                    key={index}
                    sx={{ marginLeft: 0 }}
                    control={
                      <CheckboxButton
                        key={index}
                        checked={mainStore.selectedFilters.includes(model)}
                        onClick={() => handleModelClick(model)}
                      />
                    }
                    label={
                      <Text
                        sx={{ paddingLeft: "8px" }}
                        variant="body2"
                        content={model}
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
export default observer(Models);
