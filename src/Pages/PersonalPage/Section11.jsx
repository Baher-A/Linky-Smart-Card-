import { useTheme } from "@emotion/react";
import { Box, Container, Grid, Stack, Typography } from "@mui/material";
import React, { useEffect } from "react";
import { theme } from "../../Home";
import PremiumAccDiagram from "./PremiumAccDiagram.jsx";

const Section11 = () => {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const CheckedMark = document.querySelectorAll(".Checkmarkk");
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          CheckedMark.forEach((mark) => {
            mark.classList.add("ShowCheckedMark");
          });
          document
            .getElementById("GirlBody")
            .classList.add("ShowBOYAndGirlSide");
          document
            .getElementById("TasksDiagram")
            .classList.add("ShowBOYAndGirlSide");
          document.getElementById("Floor").classList.add("ShowBOYAndGirlSide");
        } else {
          document
            .getElementById("GirlBody")
            .classList.remove("ShowBOYAndGirlSide");
          document
            .getElementById("TasksDiagram")
            .classList.remove("ShowBOYAndGirlSide");
          document
            .getElementById("Floor")
            .classList.remove("ShowBOYAndGirlSide");
          CheckedMark.forEach((mark) => {
            mark.classList.remove("ShowCheckedMark");
          });
        }
      });
    });
    observer.observe(document.getElementById("Chekmarrk"));
  }, []);

  return (
    <Stack sx={{ my: { md: 5, xs: 3 } }}>
      <Container>
        <Grid container>
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                textAlign: "center",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
                gap: 2,
                width: "100%",
                height: "100%",
              }}
            >
              <Typography variant="h7">personal Accounts</Typography>
              <Typography variant="h4" sx={{ fontWeight: "bold" }}>
                Premuim Account
              </Typography>
              <Typography
                variant="caption"
                sx={{ color: "grey", maxWidth: "480px" }}
              >
                We provide you with more than one model to display your work in
                a professional manner.
                <br /> Show your social media addresses in a simple way, as well
                as the ability to instantly share your QR code from the same
                page. Help your fans to save your contact with the click of a
                button
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box id="Chekmarrk">
              <PremiumAccDiagram />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Stack>
  );
};

export default Section11;
