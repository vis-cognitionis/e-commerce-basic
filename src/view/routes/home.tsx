import React from "react";
import { Stack } from "@mui/material";

import AllFilter from "view/components/filter/_index";

export default function Home() {
  return (
    <Stack direction="row">
      <AllFilter />
    </Stack>
  );
}
