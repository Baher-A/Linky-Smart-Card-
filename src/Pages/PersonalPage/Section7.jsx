import { Box, Container, Grid, Paper, Stack, Typography } from "@mui/material";
import React, { useEffect } from "react";
import QRCodeDesign from "./QRCodeDesign.jsx";
import { useTheme } from "@emotion/react";

const Section7 = () => {
  const ModeColor = useTheme().palette.mode;
  console.log(ModeColor);
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          document.getElementById("RedLine").classList.add("RedLineAnimation");
        } else {
          document
            .getElementById("RedLine")
            .classList.remove("RedLineAnimation");
        }
      });
    });
    observer.observe(document.getElementById("qrCaption"));
  }, []);
  return (
    <Stack sx={{ mt: { md: 5, xs: 3 } }}>
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
              <Typography variant="h7">Next Qr Generation</Typography>
              <Typography variant="h4" sx={{ fontWeight: "bold" }}>
                Full customize Your Qr code
              </Typography>
              <Typography
                id="qrCaption"
                variant="caption"
                sx={{ color: "grey", maxWidth: "480px" }}
              >
                We help you design a unique QR. Add your own text or logo to the
                QR and specify the color, size and other details
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "100%",
                height: "100%",
                position: "relative",
              }}
            >
              <QRCodeDesign ModeColor={ModeColor} />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Stack>
  );
};

export default Section7;
