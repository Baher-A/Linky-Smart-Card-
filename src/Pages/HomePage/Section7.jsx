import { Box, Button, Grid, Typography } from "@mui/material";
import React from "react";
import { theme } from "../../Home.jsx";
import SEC7IMG from "../../assets/section7.png";
import MobileAppIMG from "../../assets/mobile-app-icons2.png";
const Section7 = () => {
  return (
    <Grid container component={"section"} mt={5}>
      <Grid item xs={12} md={6}>
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <img src={SEC7IMG} alt="SEC7IMG" />
        </Box>
      </Grid>
      <Grid item xs={12} md={6}>
        <Box
          component={"div"}
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            height: "100%",
            gap: 3,
          }}
        >
          <Typography component={"h2"} variant="h2">
            Data{" "}
            <u
              style={{
                color: theme.palette.primary.main,
                textDecoration: "none",
              }}
            >
              analysis
            </u>
            &
            <br />
            Tracking
          </Typography>
          <Typography variant="caption" sx={{ maxWidth: "720px" }}>
            Get detailed information about your customers and fans through a
            professional control panel that fully displays all the behavior of
            those who visited your profile or scanned the card, in addition to
            the most visited channels from which your customers come.
          </Typography>
          <Box
            component={"img"}
            src={MobileAppIMG}
            sx={{ maxWidth: "274px" }}
          />
          <Button variant="contained" sx={{ mt: "10px", fontWeight: "bold" }}>
            READ MORE
          </Button>
        </Box>
      </Grid>
    </Grid>
  );
};

export default Section7;
