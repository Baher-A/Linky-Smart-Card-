import { Box, Container, Grid, Stack, Typography } from "@mui/material";
import React from "react";
import BFimg from "../../assets/Cards/PesonalPage/1.jpg";
const Section6 = () => {
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
              <Typography variant="h7">
                data communication technology
              </Typography>
              <Typography variant="h4" sx={{ fontWeight: "bold" }}>
                Different ways for a faster connection
              </Typography>
              <Typography
                variant="caption"
                sx={{ color: "grey", maxWidth: "480px" }}
              >
                Your personal card provides you with different ways to
                communicate
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
              <img src={BFimg} alt="BFimg" style={{ width: "100%" }} />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Stack>
  );
};

export default Section6;
