import React, { useState } from "react";
import { FormControlLabel } from "@mui/material";
import { observer } from "mobx-react";

import ContainerCard from "core/components/cards/container_card";
import RadioButton from "core/components/buttons/radio_button";
import Text from "core/components/typography/typography";
import mainStore from "view-model/main_store";

const items = [
  { name: "Old to new", label: "old-to-new" },
  { name: "New to old", label: "new-to-old" },
  { name: "Price hight to low", label: "price-high-to-low" },
  { name: "Price low to high", label: "price-low-to-high" },
];

const SortBy = () => {
  return (
    <ContainerCard
      sx={{ marginTop: "14px" }}
      title="Sort By"
      children={items.map((item) => {
        return (
          <FormControlLabel
            key={item.name}
            sx={{ marginLeft: 0 }}
            control={
              <RadioButton
                disableRipple
                checked={item.label === mainStore.selectedItem}
                onClick={() => {
                  mainStore.setSelectedItem(item.label);
                }}
                defaultChecked
              />
            }
            label={
              <Text
                sx={{ paddingLeft: "8px" }}
                variant="body2"
                content={item.name}
              />
            }
          />
        );
      })}
    />
  );
};
export default observer(SortBy);
