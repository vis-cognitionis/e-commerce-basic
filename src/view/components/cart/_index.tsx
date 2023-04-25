import React from "react";
import { Stack } from "@mui/material";

import ContainerCard from "core/components/cards/container_card";
import FilledButton from "core/components/buttons/filled_button";
import Text from "core/components/typography/typography";
import { colors } from "core/contants/colors";

const CartArea = () => {
  return (
    <Stack gap={4} pr={"147px"} pt={"83px"}>
      <ContainerCard
        sx={{ width: "213px", height: "auto" }}
        isFilter={false}
        children={<p>cart area</p>}
      />
      <ContainerCard
        sx={{ width: "213px", height: "auto" }}
        isFilter={false}
        children={
          <FilledButton
            content="Checkout"
            children={
              <Text
                content="Checkout"
                sx={{ fontSize: 13, color: colors.textLight }}
              />
            }
          />
        }
      />
    </Stack>
  );
};
export default CartArea;
