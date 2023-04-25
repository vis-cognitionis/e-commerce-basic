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
  cursor: "pointer",
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
  onClickButton: React.MouseEventHandler<HTMLButtonElement> | undefined;
  onClickCard: React.MouseEventHandler<HTMLDivElement> | undefined;
}

const ProductCard = ({
  image,
  info,
  price,
  onClickButton,
  onClickCard,
}: ProductCardProps) => {
  const handleCardClick = (event: React.MouseEvent<HTMLDivElement>) => {
    event.preventDefault();
    onClickCard && onClickCard(event);
  };

  const handleButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    onClickButton && onClickButton(event);
  };

  return (
    <CardContainer onClick={handleCardClick}>
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
      <FilledButton
        onClick={handleButtonClick}
        children={
          <Text
            content="Add to Cart"
            sx={{
              color: colors.textLight,
            }}
          />
        }
      />
    </CardContainer>
  );
};
export default ProductCard;
