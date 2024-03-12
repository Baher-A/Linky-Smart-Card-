import { Box, Container, Grid, Stack, Typography } from "@mui/material";
import React, { useEffect } from "react";
import customsocialmedia from "../../assets/Cards/PesonalPage/custom-social-media.png";
import { Xrotate, ShowTextt } from "../ElementDesign/ObserverComp";

const Section3 = () => {
  useEffect(() => {
    Xrotate(`customsocialmediaimg`, `FliprightShow`,'FliprightHidden');
    ShowTextt('ltrText', `ltr`);
  }, []);

  return (
    <Stack sx={{ my: { xs: 10, md: 20 } }}>
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
              <Typography className="HIdeText ltrText" id="text1" variant="h7">
                THERE ARE MANY VARIATIONS
              </Typography>
              <Typography
                className="HIdeText ltrText"
                id="text2"
                variant="h4"
                sx={{ fontWeight: "bold" }}
              >
                Customize All Social Links
              </Typography>
              <Typography
                className="HIdeText ltrText"
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
            <Stack
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "100%",
                height: "100%",
              }}
            >
              <img
                id="customsocialmediaimg"
                src={customsocialmedia}
                className="FliprightHidden"
                alt="custom-social-media"
                style={{
                  width: "100%",
                }}
              />
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </Stack>
  );
};

export default Section3;
