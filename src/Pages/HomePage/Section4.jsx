import { Box, Button, Grid, Paper, Typography, useTheme } from "@mui/material";
import React from "react";

import Socialmediaoffer from "../../assets/spcialoffer1.png";
import SVGSHAPE from "./SVGSHAPE";
import { useNavigate } from "react-router-dom";
import PrimaryButton from "../ElementDesign/PrimaryButton";
import SecondaryButton from "../ElementDesign/SecondaryButton";

const Section4 = () => {
  const navigat= useNavigate()
  const theme = useTheme();
  return (
    <Box
      component={"section"}
      sx={{
        my: { xs: 10, md: 15 },
        borderBottomRightRadius: "10%",
        borderTopLeftRadius: "20%",
        borderTopRightRadius: "3%",
        borderBottomLeftRadius: "3%",

        position: "relative",
      }}
    >
      {/* Svg Shape */}
      <SVGSHAPE  Option={true} />

      <Grid
        container
        sx={{
          width: "100%",
          height: "100%",
          alignItems: "center",
        }}
      >
        <Grid item xs={12} md={6}>
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
          md={6}
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
              sx={{ fontSize: { sm: "35px", md: "55px" }, maxWidth: "590px" }}
            >
              Custom{" "}
              <u
                style={{
                  textDecoration: "none",
                  color: theme.palette.primary.main,
                }}
              >
                Smart
              </u>{" "}
              Business Card
            </Typography>
            <Typography
              variant="caption"
              color={theme.palette.text.secondary}
              sx={{ maxWidth: "560px" }}
            >
              Do you want to get a design that is specific to you or your
              business, share your data and present yourself among your
              customers in a smarter way with Linky and join many of our
              distinguished customers?
            </Typography>

            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <Paper
                variant="outlined"
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  padding: "20px 40px",
                  bgcolor: "rgba(9, 121, 196, 0.57)",
                  borderRadius: "8px",
                }}
              >
                <Typography variant="h5">0</Typography>
                <Typography>Days</Typography>
              </Paper>
              <Paper
                variant="outlined"
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  padding: "20px 40px",
                  borderRadius: "8px",
                  bgcolor: "rgba(9, 121, 196, 0.57)",
                }}
              >
                <Typography variant="h5">00</Typography>
                <Typography>Hr</Typography>
              </Paper>

              <Paper
                variant="outlined"
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  padding: "20px 40px",
                  borderRadius: "8px",
                  bgcolor: "rgba(9, 121, 196, 0.57)",
                }}
              >
                <Typography variant="h5">00</Typography>
                <Typography>Min</Typography>
              </Paper>

              <Paper
                variant="outlined"
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  padding: "20px 40px",
                  borderRadius: "8px",
                  bgcolor: "rgba(9, 121, 196, 0.57)",
                }}
              >
                <Typography variant="h5">00</Typography>
                <Typography>sc</Typography>
              </Paper>
            </Box>

            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                width: "100%",

                mt: 5,
              }}
            >
              <PrimaryButton
                content={'GET YOUR CARD'}
                onClick={() => { navigat('./products/Custom-Design') }}
                sx={{
                  mr: 3,
                  bgcolor: `#333`,
                  padding: "5px 20px ",
                  "&:hover": {
                    boxShadow:
                    theme.palette.mode == "light"
                      ? `1px 1px  5px 5px rgba(0,0,0,.3) !important`
                      : `0px 0px  5px 5px rgba(255,255,255,.3) !important`,
                    bgcolor: theme.palette.primary.dark,
                  },
                }}
              >
                GET YOUR CARD
              </PrimaryButton>
              <SecondaryButton
                content={'Business Support'}
                sx={{
                  


                  "&:hover": {
                    boxShadow:
                    theme.palette.mode == "light"
                      ? `1px 1px  5px 5px rgba(0,0,0,.3) !important`
                      : `0px 0px  5px 5px rgba(255,255,255,.3) !important`,
   
                  },
                }}
              >
                
              </SecondaryButton>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Section4;
