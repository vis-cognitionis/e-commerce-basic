import React from "react";
import { Stack } from "@mui/material";

import CustomContainer from "core/components/containers/container";
import FilledButton from "core/components/buttons/filled_button";
import Text from "core/components/typography/typography";

const CartArea = () => {
  return (
    <Stack gap={4} pr={"147px"} pt={"83px"}>
      <CustomContainer
        sx={{ width: "213px", height: "auto" }}
        isFilter={false}
        children={<p>cart area</p>}
      />
      <CustomContainer
        sx={{ width: "213px", height: "auto" }}
        isFilter={false}
        children={
          <FilledButton
            content="Checkout"
            children={
              <Text
                content="Checkout"
                sx={{ fontSize: 13 }}
                isButtonText={true}
              />
            }
          />
        }
      />
    </Stack>
  );
};
export default CartArea;
