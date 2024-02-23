import { Box, Container, Grid, Stack, Typography } from "@mui/material";
import React from "react";
import customsocialmedia from "../../assets/Cards/PesonalPage/custom-social-media.png";
const Section3 = () => {
  return (
    <Stack sx={{ mt: { xs: 3, md: 5 } }}>
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
              <Typography variant="h7">THERE ARE MANY VARIATIONS</Typography>
              <Typography variant="h4" sx={{ fontWeight: "bold" }}>
                Customize All Social Links
              </Typography>
              <Typography
                variant="caption"
                sx={{ color: "grey", maxWidth: "480px" }}
              >
                Learn about a wide range of tools that will give you complete
                control over the presentation of yourself and the details of
                your social media
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "100%",
                height: "100%",
              }}
            >
              <img
                src={customsocialmedia}
                alt="custom-social-media"
                style={{ width: "100%" }}
              />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Stack>
  );
};

export default Section3;
