import React from "react";
import { Box, styled, BoxProps, Stack, StackProps } from "@mui/material";

import { colors } from "core/contants/colors";
import Text from "../typography/typography";
import FilledButton from "../buttons/filled_button";

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
  return (
    <DetailCardContainer>
      <DetailImage src="" />
      <InfoContainer>
        <Infos>
          <Text
            variant="h5"
            content={"info"}
            noWrap
            sx={{
              maxWidth: "100%",
            }}
          />
          <Text
            content={`${"price" + " ₺ "}`}
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
          <Text
            content="Lorem ipsum dolor sit amet, conc consectetur et, luctus sit amet erat. Pellentesque habitesuada fames ac turpis egestas. Nulla facilisi. Suspendisse egestas maximus eleifend. Donec lectus ex, commodo id tristique eu, convallis nec est. Vestibulum ante ipsue cubilia curae; Aenean in consectetur dolor. In porttitor risus vel nisl fringilla egestas. Praesent id enim dolor."
            sx={{ fontSize: 18 }}
          />
        </DescContainer>
      </InfoContainer>
    </DetailCardContainer>
  );
};
export default DetailCard;
