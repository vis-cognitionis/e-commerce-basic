import React from "react";
import { Stack } from "@mui/material";

import SortBy from "./sort_by";
import Brands from "./brands";
import Models from "./models";

const AllFilter = () => {
  return (
    <Stack gap={5.5}>
      <SortBy />
      <Brands />
      <Models />
    </Stack>
  );
};
export default AllFilter;
