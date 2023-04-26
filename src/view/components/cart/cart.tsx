import React from "react";
import ContainerCard from "core/components/cards/container_card";
import { Box, Button, Stack } from "@mui/material";
import Text from "core/components/typography/typography";
import { colors } from "../../../core/contants/colors";

const Cart = () => {
  return (
    <ContainerCard
      sx={{ width: "213px", height: "auto", padding: "10px" }}
      isFilter={false}
      children={
        <Stack>
          <Stack
            direction="row"
            spacing={2}
            alignItems={"center"}
            width={"193px"}
          >
            <Stack width={"106px"}>
              <Text variant="caption" content="Samsung S22" />
              <Text
                content="12.000 ₺"
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
              <Button
                sx={{
                  width: "25px",
                  maxWidth: "25px",
                  minWidth: "25px",
                  padding: 0,
                  height: "25px",
                  borderRadius: "4px",
                  backgroundColor: colors.lightGray,
                  color: colors.textDark,
                }}
              >
                -
              </Button>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  padding: "2.5px 10.5px 2.5px 10.5px",
                  width: "27px",
                  height: "27px",
                  backgroundColor: colors.primary,
                  boxSizing: "border-box",
                }}
              >
                <Text content="2" sx={{ color: colors.textLight }} />
              </Box>
              <Button
                sx={{
                  width: "25px",
                  maxWidth: "25px",
                  minWidth: "25px",
                  padding: 0,
                  height: "25px",
                  borderRadius: "4px",
                  backgroundColor: colors.lightGray,
                  color: colors.textDark,
                }}
              >
                +
              </Button>
            </Stack>
          </Stack>
        </Stack>
      }
    />
  );
};
export default Cart;
