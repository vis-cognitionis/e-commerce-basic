import { Box, Stack, StackProps, styled } from "@mui/material";
import { useNavigate } from "react-router";

import FilledButton from "core/components/buttons/filled_button";
import Text from "core/components/typography/typography";
import { colors } from "core/contants/colors";

const CenteredBox = styled(Stack)<StackProps>({
  alignItems: "center",
  justifyContent: "center",
  height: "100vh",
  background: colors.lightGray,
});

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <CenteredBox spacing={5}>
      <Text content="404 Not Found" variant="h2" align="center" />
      <FilledButton
        sx={{ width: "10%" }}
        onClick={() => navigate("/")}
        children={
          <Text
            content="Go Home"
            variant="body1"
            align="center"
            sx={{ color: colors.textLight, fontWeight: 600 }}
          />
        }
      />
    </CenteredBox>
  );
};

export default NotFound;
