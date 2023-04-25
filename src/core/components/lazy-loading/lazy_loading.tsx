import React from "react";
import { Skeleton, SkeletonProps } from "@mui/material";

const LazyLoadingSkeleton = (props: SkeletonProps) => {
  return <Skeleton variant="rectangular" {...props} />;
};

export default LazyLoadingSkeleton;
