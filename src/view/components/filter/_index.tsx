import React from "react";
import { Stack } from "@mui/material";

import SortBy from "./sort_by";
import Brands from "./brands";
import Model from "./model";

const AllFilter = () => {
  return (
    <Stack gap={5.5}>
      <SortBy />
      <Brands />
      <Model />
    </Stack>
  );
};
export default AllFilter;
