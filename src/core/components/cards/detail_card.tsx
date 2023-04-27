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

const DetailCardContainer = styled(Box)<BoxProps>(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  alignItems: "flex-start",
  padding: "10px",
  gap: "24px",
  position: "relative",
  width: "auto",
  height: "auto",
  background: colors.background,
  boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
  boxSizing: "border-box",
  [theme.breakpoints.down(1590)]: {
    flexDirection: "column",
    alignItems: "center",
    justiyContent: "center",
  },
  [theme.breakpoints.down(950)]: {
    width: "80%",
    height: "auto",
  },
}));

const DetailImage = styled("img")(({ theme }) => ({
  width: "549px",
  height: "422px",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  [theme.breakpoints.down(950)]: {
    width: "80%",
    height: "auto",
  },
}));

const DetailImageContainer = styled(Box)<BoxProps>(({ theme }) => ({
  width: "549px",
  height: "422px",
  position: "relative",
  [theme.breakpoints.down(950)]: {
    width: "80%",
    height: "auto",
  },
}));

const InfoContainer = styled(Stack)<StackProps>(({ theme }) => ({
  padding: "10px",
  paddingRight: "20px",
  gap: "19px",
  width: "482px",
  height: "447px",
  boxSizing: "border-box",
  [theme.breakpoints.down(950)]: {
    width: "90%",
    height: "auto",
  },
}));

const DescContainer = styled(Stack)<StackProps>(({ theme }) => ({
  overflowY: "auto",
  "&::-webkit-scrollbar": {
    display: "none",
  },
  height: "242px",
  [theme.breakpoints.down(950)]: {
    width: "90%",
    height: "auto",
  },
}));

const Infos = styled(Stack)<StackProps>(({ theme }) => ({
  padding: "0px",
  gap: "10px",
  width: "442px",
  minHeight: "99px",
  [theme.breakpoints.down(950)]: {
    width: "90%",
    height: "auto",
  },
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
  onClick: React.MouseEventHandler<HTMLButtonElement> | undefined;
}

const DetailCard = ({
  image,
  info,
  price,
  description,
  isLoading,
  onClick,
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
              onClick={onClick}
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
