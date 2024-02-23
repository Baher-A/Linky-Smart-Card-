import { Box, Button, Grid, Paper, Typography } from "@mui/material";
import React from "react";
import { theme } from "../../Home";
import Socialmediaoffer from "../../assets/spcialoffer1.png";
const Section4 = () => {
  return (
    <Box component={"section"}>
      <Grid
        container
        sx={{
          width: "100%",
          height: "100%",
          alignItems: "center",
        }}
      >
        <Grid item xs={12} sm={6}>
          <Box
            component="img"
            sx={{
              objectFit: "contain",
              width: "100%",
              height: "100%",
            }}
            alt="The house from the offer."
            src={Socialmediaoffer}
          />
        </Grid>
        <Grid
          item
          xs={12}
          sm={6}
          sx={{
            textAlign: "center",
            padding: ".25rem",
            height: "100%",
            gap: 3,
          }}
        >
          <Box
            sx={{
              width: "100%",
              height: "100%",
              gap: 4,
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Typography
              variant="h2"
              sx={{ fontSize: { sm: "35px", md: "55px" } }}
            >
              Custom Smart <br /> Business Card
            </Typography>
            <Typography
              variant="caption"
              color={theme.palette.grey[500]}
              padding={1}
            >
              Do you want to get a design that is specific to you or your
              business, share your data and present yourself among your
              customers in a smarter way with Linky and join many of our
              distinguished customers?
            </Typography>
            <Grid container>
              <Grid item xs={3}>
                <Paper
                  variant="outlined"
                  sx={{ display: "flex", flexDirection: "column" }}
                >
                  <Typography variant="h5">0</Typography>
                  <Typography>Days</Typography>
                </Paper>
              </Grid>
              <Grid item xs={3}>
                <Paper
                  variant="outlined"
                  sx={{ display: "flex", flexDirection: "column" }}
                >
                  <Typography variant="h5">00</Typography>
                  <Typography>Hr</Typography>
                </Paper>
              </Grid>
              <Grid item xs={3}>
                <Paper
                  variant="outlined"
                  sx={{ display: "flex", flexDirection: "column" }}
                >
                  <Typography variant="h5">00</Typography>
                  <Typography>Min</Typography>
                </Paper>
              </Grid>
              <Grid item xs={3}>
                <Paper
                  variant="outlined"
                  sx={{ display: "flex", flexDirection: "column" }}
                >
                  <Typography variant="h5">00</Typography>
                  <Typography>sc</Typography>
                </Paper>
              </Grid>
            </Grid>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                width: "100%",
              }}
            >
              <Button
                variant="contained"
                sx={{
                  fontWeight: "bold",
                  mr: 3,
                  bgcolor: theme.palette.primary.main,
                  color: "black",
                  "&:hover": {
                    boxShadow: `-1px -1px  40px 5px #29E6FF !important`,
                    bgcolor: theme.palette.primary.main,
                  },
                }}
              >
                GET YOUR CARD
              </Button>
              <Button
                className="secButon"
                variant="outlined"
                sx={{
                  bgcolor: theme.palette.secondary.main,
                  borderColor: theme.palette.secondary.main,
                  "&:hover": {
                    bgcolor: theme.palette.secondary.main,
                    borderColor: theme.palette.secondary.main,
                  },
                }}
              >
                Business Support
              </Button>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Section4;
