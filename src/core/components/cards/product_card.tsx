import React from "react";
import { Stack, styled, StackProps } from "@mui/material";

import Text from "../typography/typography";
import FilledButton from "../buttons/filled_button";
import { colors } from "core/contants/colors";

const CardContainer = styled(Stack)<StackProps>(() => ({
  alignItems: "flex-start",
  padding: "10px",
  gap: "15px",
  width: "180px",
  height: "302px",
  background: colors.background,
  boxSizing: "border-box",
}));

interface ProductCardProps {
  image: string;
  info: string;
  price: string;
}

const ProductCard = ({ image, info, price }: ProductCardProps) => {
  return (
    <CardContainer>
      <img
        style={{
          width: "160px",
          height: "150px",
        }}
        src={image}
      ></img>
      <Text content={price}></Text>
      <Text content={info}></Text>
      <FilledButton children={<Text content="Add to Cart" isButtonText />} />
    </CardContainer>
  );
};
export default ProductCard;
