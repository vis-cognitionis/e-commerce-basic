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

const CardImage = styled("img")(() => ({
  width: "160px",
  height: "150px",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
}));

interface ProductCardProps {
  image: string;
  info: string;
  price: string;
}

const ProductCard = ({ image, info, price }: ProductCardProps) => {
  return (
    <CardContainer>
      <CardImage src={image} loading="lazy" />
      <Text
        content={`${price + " ₺ "}`}
        variant="body2"
        sx={{ color: colors.primary }}
      />
      <Text
        variant="body2"
        content={info}
        noWrap
        sx={{
          maxWidth: "100%",
        }}
      />
      <FilledButton children={<Text content="Add to Cart" isButtonText />} />
    </CardContainer>
  );
};
export default ProductCard;
