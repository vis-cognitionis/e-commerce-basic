import React from "react";
import {
  Box,
  Button,
  Stack,
  StackProps,
  ButtonProps,
  styled,
  BoxProps,
} from "@mui/material";

import ContainerCard from "core/components/cards/container_card";
import Text from "core/components/typography/typography";
import { colors } from "core/contants/colors";
import { useCart } from "contexts/cart_context";

const CartContainer = styled(Stack)<StackProps>(() => ({
  maxHeight: "830px",
  height: "auto",
  overflowY: "auto",
}));

const CountButton = styled(Button)<ButtonProps>(() => ({
  width: "25px",
  maxWidth: "25px",
  minWidth: "25px",
  padding: 0,
  height: "25px",
  borderRadius: "4px",
  backgroundColor: colors.lightGray,
  color: colors.textDark,
}));

const QuantityBox = styled(Box)<BoxProps>(() => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  padding: "2.5px 10.5px 2.5px 10.5px",
  width: "27px",
  height: "27px",
  backgroundColor: colors.primary,
  boxSizing: "border-box",
}));

const Cart = () => {
  const { cart, addToCart, removeFromCart } = useCart();

  return cart.length > 0 ? (
    <ContainerCard
      sx={{ width: "213px", height: "auto", padding: "10px" }}
      isFilter={false}
      children={
        <CartContainer spacing={1.8} pb={1.5}>
          {cart.map((item) => {
            return (
              <Stack
                key={item.id}
                direction="row"
                spacing={2}
                alignItems={"center"}
                width={"193px"}
              >
                <Stack width={"106px"}>
                  <Text variant="caption" content={item.brand} />
                  <Text
                    content={`${item.price + " ₺"}`}
                    sx={{
                      color: colors.primary,
                      mt: "-4px",
                      fontSize: 10,
                      fontWeight: 500,
                    }}
                  />
                </Stack>
                <Stack
                  direction="row"
                  width={"78px"}
                  height={"27px"}
                  alignItems={"center"}
                >
                  <CountButton onClick={() => removeFromCart(Number(item.id))}>
                    -
                  </CountButton>
                  <QuantityBox>
                    <Text
                      content={item.quantity.toString()}
                      sx={{ color: colors.textLight }}
                    />
                  </QuantityBox>
                  <CountButton onClick={() => addToCart(item)}>+</CountButton>
                </Stack>
              </Stack>
            );
          })}
        </CartContainer>
      }
    />
  ) : null;
};
export default Cart;
