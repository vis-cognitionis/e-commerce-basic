import React, { useState } from "react";
import {
  Stack,
  styled,
  StackProps,
  CircularProgress,
  Box,
  BoxProps,
} from "@mui/material";

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

const Image = styled("img")(() => ({
  width: "160px",
  height: "150px",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
}));

const ImageContainer = styled(Box)<BoxProps>(() => ({
  width: "160px",
  height: "150px",
  position: "relative",
}));

const ImageLoading = styled(CircularProgress)(() => ({
  position: "absolute",
  top: "50%",
  left: "35%",
  transform: "translate(-50%, -50%)",
  color: colors.primary,
}));

const CardImage = ({ src }: { src: string }) => {
  const [loading, setLoading] = useState<boolean>(true);

  const handleLoad = () => {
    setLoading(false);
  };

  return (
    <ImageContainer>
      {loading && <ImageLoading />}
      <Image
        src={src}
        alt=""
        onLoad={handleLoad}
        sx={{ display: loading ? "none" : "block" }}
      />
    </ImageContainer>
  );
};

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
      <CardImage src={image} />
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
