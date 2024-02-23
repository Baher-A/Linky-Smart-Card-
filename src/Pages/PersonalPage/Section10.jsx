import { Box, Container, Grid, Stack, Typography } from "@mui/material";
import React, { useEffect } from "react";
import SocialMediaimg from "./SocialMediaimg.jsx";
const Section10 = () => {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const IconsAnimation = document.querySelectorAll(".SocialMEdiaIcons");
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          IconsAnimation.forEach((icon) => {
            icon.classList.add("ShowIconsAnimation");
          });
          document
            .getElementById("GirlSide")
            .classList.add("ShowBOYAndGirlSide");
          document
            .getElementById("BoySild")
            .classList.add("ShowBOYAndGirlSide");
        } else {
          document
            .getElementById("GirlSide")
            .classList.remove("ShowBOYAndGirlSide");
          document
            .getElementById("BoySild")
            .classList.remove("ShowBOYAndGirlSide");
          IconsAnimation.forEach((icon) => {
            icon.classList.remove("ShowIconsAnimation");
          });
        }
      });
    });
    observer.observe(document.getElementById("SocialMed"));
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
              <Typography variant="h7">Advanced tools</Typography>
              <Typography variant="h4" sx={{ fontWeight: "bold" }}>
                Advanced tools
              </Typography>
              <Typography
                variant="caption"
                sx={{ color: "grey", maxWidth: "480px" }}
              >
                Present your business professionally using unique presentation
                tools. We help you include external content from the most
                popular social media platforms.
                <br /> YouTube ~ SoundCloud ~ Instagram ~ paintrest ~ twitter ~
                Spotify ~ tidal ~ Html Code ~ …. and more
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box id="SocialMed">
              <SocialMediaimg />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Stack>
  );
};

export default Section10;
