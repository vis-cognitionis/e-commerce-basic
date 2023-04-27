import React from "react";
import { Stack } from "@mui/material";

import FilledButton from "core/components/buttons/filled_button";
import ContainerCard from "core/components/cards/container_card";
import Text from "core/components/typography/typography";
import { colors } from "core/contants/colors";
import { useCart } from "contexts/cart_context";

const Checkout = () => {
  const { totalPrice } = useCart();

  return (
    <ContainerCard
      sx={{
        width: "213px",
        height: "82px",
        padding: "10px",
      }}
      isFilter={false}
      children={
        <Stack spacing={1.4}>
          <Stack direction="row" spacing={0.5} alignItems={"center"}>
            <Text content="Total Price:" variant="body2" />
            <Text
              content={`${totalPrice.toLocaleString() + " ₺"}`}
              variant="body2"
              sx={{ color: colors.primary, fontWeight: 700 }}
            />
          </Stack>

          <FilledButton
            content="Checkout"
            sx={{ maxHeight: "30px", minWidth: "193px" }}
            children={
              <Text
                content="Checkout"
                sx={{ fontSize: 13, color: colors.textLight }}
              />
            }
          />
        </Stack>
      }
    />
  );
};
export default Checkout;
