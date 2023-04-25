import React from "react";
import { Stack, StackProps, SxProps, styled } from "@mui/material";

import Text from "core/components/typography/typography";
import { colors } from "core/contants/colors";

const Container = styled(Stack)<StackProps>(() => ({
  padding: "15px",
  gap: "15px",
  width: "220px",
  height: "158px",
  background: colors.background,
  boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
  alignItems: "flex-start",
  boxSizing: "border-box",
  position: "relative",
}));

interface ContainerProps {
  children: React.ReactNode;
  title?: string;
  sx?: SxProps;
  isFilter?: boolean;
}

const ContainerCard = ({
  children,
  title,
  sx,
  isFilter = true,
}: ContainerProps) => {
  return (
    <Container sx={sx}>
      {isFilter && (
        <Text
          sx={{ position: "absolute", top: -25, left: 0 }}
          variant="caption"
          content={title as string}
          color="rgba(51, 51, 51, 0.7)"
        />
      )}
      {children}
    </Container>
  );
};

export default ContainerCard;
