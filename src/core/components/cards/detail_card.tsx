import React, { useEffect, useState } from "react";
import { Box, styled, BoxProps, Stack, StackProps } from "@mui/material";
import { useParams } from "react-router-dom";

import Text from "../typography/typography";
import FilledButton from "../buttons/filled_button";
import useGetProducts, { ProductCardProps } from "service/useGetProducts";
import { colors } from "core/contants/colors";

const DetailCardContainer = styled(Box)<BoxProps>(() => ({
  display: "flex",
  flexDirection: "row",
  alignItems: "flex-start",
  padding: "10px",
  gap: "10px",
  position: "relative",
  width: "1061px",
  height: "457px",
  background: colors.background,
  boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
  boxSizing: "border-box",
}));

const DetailImage = styled("img")(() => ({
  width: "549px",
  height: "422px",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
}));

const InfoContainer = styled(Stack)<StackProps>(() => ({
  padding: "10px",
  gap: "19px",
  width: "482px",
  height: "447px",
  boxSizing: "border-box",
}));

const DescContainer = styled(Stack)<StackProps>(() => ({
  overflowY: "auto",
  "&::-webkit-scrollbar": {
    display: "none",
  },
  height: "242px",
}));

const Infos = styled(Stack)<StackProps>(() => ({
  padding: "0px",
  gap: "10px",
  width: "442px",
  minHeight: "99px",
}));

const DetailCard = () => {
  const [selectedProduct, setSelectedProduct] = useState<ProductCardProps>(
    {} as ProductCardProps
  );

  const { products } = useGetProducts();
  const { id } = useParams();

  const fetchProduct = async () => {
    const fetchedProduct = products?.find((product) => product.id === id);
    fetchedProduct && setSelectedProduct(fetchedProduct);
  };

  useEffect(() => {
    fetchProduct();
  }, [products, id]);

  return (
    <DetailCardContainer>
      <DetailImage src={selectedProduct.image} />
      <InfoContainer>
        <Infos>
          <Text
            variant="h5"
            content={selectedProduct.brand + " " + selectedProduct.model}
            noWrap
            sx={{
              maxWidth: "100%",
            }}
          />
          <Text
            content={`${selectedProduct.price + " ₺ "}`}
            variant="h5"
            sx={{ color: colors.primary, fontWeight: 500 }}
          />
        </Infos>
        <FilledButton
          sx={{ height: "38px" }}
          children={
            <Text
              content="Add to Cart"
              sx={{ color: colors.textLight, fontSize: 18, fontWeight: 700 }}
            />
          }
        />
        <DescContainer>
          <Text content={selectedProduct.description} sx={{ fontSize: 18 }} />
        </DescContainer>
      </InfoContainer>
    </DetailCardContainer>
  );
};
export default DetailCard;
