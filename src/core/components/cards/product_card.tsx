import React, { useState } from "react";
import { Stack, styled, StackProps, Box, BoxProps } from "@mui/material";

import Text from "../typography/typography";
import FilledButton from "../buttons/filled_button";
import LazyLoadingSkeleton from "../lazy-loading/lazy_loading";
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

const CardImage = ({ src }: { src: string }) => {
  const [loading, setLoading] = useState<boolean>(true);

  const handleLoad = () => {
    setLoading(false);
  };

  return (
    <ImageContainer>
      {loading && <LazyLoadingSkeleton width={160} height={150} />}
      <Image
        draggable="false"
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
        sx={{
          lineHeight: 1.2,
          height: 33.59,
          overflow: "hidden",
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
