import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import DividerBG from "./DividerBG.jsx";
import { Xrotate, ShowTextt } from "../ElementDesign/ObserverComp";

const Section5 = ({ text }) => {
  return (
    <Stack
      component="div"
      sx={{
        width: "100%",
        position: "relative",
        my: { xs: 15, md: 15 },
        height: "100%",
        display: "flex",
        alignContent: "center",
        justifyContent: "center",
        // bgcolor: "#F6F6F6",
      }}
    >
      <Typography
        variant="h4"
        textAlign={"center"}
        sx={{
          width: "100%",
          padding: "10px",
          color: "black",
          fontWeight: "bold",
        }}
      >
        {text}
      </Typography>

      <DividerBG />
    </Stack>
  );
};

export default Section5;
