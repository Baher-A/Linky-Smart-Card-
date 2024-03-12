import { Flare } from "@mui/icons-material";
import { Box, Stack } from "@mui/material";
import React from "react";
import { LogoImages } from "../Products/ProductsInformation";
const LogoesSlider = () => {
  return (
    <Stack
      className="scrolller"
      sx={{
        maxWidth: "100%",
        overflow: "hidden",
        borderRadius: "1rem",
      }}
    >
      <Box
        className={"Innnerscroller"}
        sx={{
          width: "100%",
          display: "flex",
          gap: "7rem",
            animation: "rtlScroll 50s linear infinite",
       
        }}
      >
        {LogoImages.map((Logoimg, i) => {
          return (
            <Box
              key={`Logoimg${i}`}
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "90px",
              }}
            >
              <Box
                component={"img"}
                src={Logoimg}
                sx={{ objectFit: "contain", width: "100%", height: "100%" }}
              />
            </Box>
          );
        })}
        {LogoImages.map((Logoimg, i) => {
          return (
            <Box
              key={`Logoimg${i}`}
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "90px",
              }}
            >
              <Box
                component={"img"}
                src={Logoimg}
                sx={{ objectFit: "contain", width: "100%", height: "100%" }}
              />
            </Box>
          );
        })}
        {LogoImages.map((Logoimg, i) => {
          return (
            <Box
              key={`Logoimg${i}`}
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "90px",
              }}
            >
              <Box
                component={"img"}
                src={Logoimg}
                sx={{ objectFit: "contain", width: "100%", height: "100%" }}
              />
            </Box>
          );
        })}
        {LogoImages.map((Logoimg, i) => {
          return (
            <Box
              key={`Logoimg${i}`}
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "90px",
              }}
            >
              <Box
                component={"img"}
                src={Logoimg}
                sx={{ objectFit: "contain", width: "100%", height: "100%" }}
              />
            </Box>
          );
        })}
      </Box>
    </Stack>
  );
};

export default LogoesSlider;
