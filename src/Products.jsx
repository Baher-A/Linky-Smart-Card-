import React from "react";
import { Stack, Typography } from "@mui/material";
import { Outlet } from "react-router-dom";

const Products = () => {
  return (
    <Stack sx={{ mt: "5rem" }}>
      {/* <Typography variant="h1">Stable design of product page</Typography> */}
      <Outlet />
    </Stack>
  );
};

export default Products;
