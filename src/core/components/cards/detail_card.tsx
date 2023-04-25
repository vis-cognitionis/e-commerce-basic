import React, { useState } from "react";
import {
  Box,
  styled,
  BoxProps,
  Stack,
  StackProps,
  CircularProgress,
} from "@mui/material";

import Text from "../typography/typography";
import FilledButton from "../buttons/filled_button";
import LazyLoadingSkeleton from "../lazy-loading/lazy_loading";
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

const DetailImageContainer = styled(Box)<BoxProps>(() => ({
  width: "549px",
  height: "422px",
  position: "relative",
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

const DetailCardImage = ({ src }: { src: string }) => {
  const [loading, setLoading] = useState<boolean>(true);

  const handleLoad = () => {
    setLoading(false);
  };

  return (
    <DetailImageContainer>
      {loading && <LazyLoadingSkeleton width={549} height={422} />}
      <DetailImage
        draggable="false"
        src={src}
        alt=""
        onLoad={handleLoad}
        sx={{ display: loading ? "none" : "block" }}
      />
    </DetailImageContainer>
  );
};

interface DetailCadProps {
  image: string;
  info: string;
  price: string;
  description: string;
  isLoading: boolean;
}

const DetailCard = ({
  image,
  info,
  price,
  description,
  isLoading,
}: DetailCadProps) => {
  return (
    <DetailCardContainer>
      <DetailCardImage src={image} />
      <InfoContainer>
        {isLoading ? (
          <CircularProgress
            sx={{
              alignSelf: "center",
              display: "flex",
            }}
          />
        ) : (
          <>
            <Infos>
              <Text
                variant="h5"
                content={info}
                noWrap
                sx={{
                  maxWidth: "100%",
                }}
              />
              <Text
                content={`${price + " ₺ "}`}
                variant="h5"
                sx={{ color: colors.primary, fontWeight: 500 }}
              />
            </Infos>
            <FilledButton
              sx={{ height: "38px" }}
              children={
                <Text
                  content="Add to Cart"
                  sx={{
                    color: colors.textLight,
                    fontSize: 18,
                    fontWeight: 700,
                  }}
                />
              }
            />
            <DescContainer>
              <Text content={description} sx={{ fontSize: 18 }} />
            </DescContainer>
          </>
        )}
      </InfoContainer>
    </DetailCardContainer>
  );
};
export default DetailCard;
