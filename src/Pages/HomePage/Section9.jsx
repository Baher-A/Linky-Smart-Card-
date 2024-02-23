import { Box, Typography } from "@mui/material";
import React from "react";
import ImageSlider from "../PersonalPage/ImageSlider";
import { theme } from "../../Home.jsx";
const Section9 = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: 5,
        mb: 5,
      }}
    >
      <Box
        display={"flex"}
        flexDirection={"column"}
        textAlign={"center"}
        width={"100%"}
        gap={2}
      >
        <Typography variant="h6" color={theme.palette.primary}>
          Meet Our Top Customers
        </Typography>
        <Typography variant="h2">Top Profiles</Typography>
        <Typography variant="caption">
          Join us now and share with us your success in your field
        </Typography>
      </Box>
      <ImageSlider />
    </Box>
  );
};

export default Section9;
