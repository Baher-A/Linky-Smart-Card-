import { Box, Button, Grid, Typography, useTheme } from "@mui/material";
import React from "react";
import LawyerImg from "../../assets/lawyer.png";
import LogoesSlider from "./LogoesSlider";
import SecondaryButton from "../ElementDesign/SecondaryButton";

const Section5 = () => {
  const theme = useTheme();
  return (
    <Grid
      container
      component={"section"}
      sx={{
        alignItems: "center",
        justifyItems: "center",
        my: { xs: 10, md: 15 },
      }}
    >
      <Grid
        item
        xs={12}
        sm={6}
        sx={{
          width: "100%",
          height: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <img
          style={{
            width: "100%",
            maxWidth: "507px",
            maxHeight: "768px",
            justifyContent: "center",
            objectFit: "contain",
            display: "flex",
          }}
          alt="LawyerImgalt"
          src={LawyerImg}
        />
      </Grid>
      <Grid item xs={12} sm={6} sx={{ textAlign: "center", width: "100%" }}>
        <Typography
          component={"div"}
          sx={{
            padding: "10px",
            color: theme.palette.text.secondary,
            fontSize: "25px",
          }}
        >
          Top Partners & Customers
        </Typography>
        <Typography
          variant="h2"
          component={"h4"}
          sx={{ padding: "10px", color: theme.palette.primary.main }}
        >
          Meet Our Top <br />
          Customers
        </Typography>
        <Grid
          container
          component={"div"}
          sx={{
            textAlign: "center",
            justifyContent: "space-around",
            padding: "10px",
          }}
        >
          <Grid
            item
            xs={4}
            sx={{ gridTemplateColumns: "2", width: "100%", height: "100%" }}
          >
            <Typography
              variant={"body1"}
              component={"h4"}
              sx={{
                fontSize: "2rem",
                fontWeight: "bold",
                color: theme.palette.primary.main,
              }}
            >
              1500
            </Typography>
            <Typography
              component={"h4"}
              sx={{
                fontSize: {
                  sm: ".7rem",
                  md: ".9rem",
                  lg: "1.25rem",
                  color: theme.palette.text.secondary,
                },
                fontWeight: "bold",
              }}
            >
              Companies in service
            </Typography>
          </Grid>
          <Grid item xs={4} sx={{ gridTemplateColumns: "2" }}>
            <Typography
              component={"h4"}
              sx={{
                fontSize: "2rem",
                fontWeight: "bold",
                color: theme.palette.primary.main,
              }}
            >
              180
            </Typography>
            <Typography
              component={"h4"}
              sx={{
                fontSize: {
                  sm: ".7rem",
                  md: ".9rem",
                  lg: "1.25rem",
                },
                fontWeight: "bold",
                color: theme.palette.text.secondary,
              }}
            >
              Received licenses
            </Typography>
          </Grid>
          <Grid item xs={4}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Typography
                component={"h4"}
                sx={{
                  fontSize: "2rem",
                  fontWeight: "bold",
                  color: theme.palette.primary.main,
                }}
              >
                12
              </Typography>
              <Typography
                component={"h4"}
                sx={{
                  fontSize: {
                    sm: ".7rem",
                    md: ".9rem",
                    lg: "1.25rem",
                  },
                  fontWeight: "bold",
                  color: theme.palette.text.secondary,
                }}
              >
                Professional lawyers
              </Typography>
            </Box>
          </Grid>
          <SecondaryButton
            sx={{
              mt: 5,
              padding: "10px 20px !important",
              lineheight: 1.5,
              "&:hover": {
                boxShadow:
                  theme.palette.mode == "light"
                    ? `1px 1px  5px 5px rgba(0,0,0,.3) !important`
                    : `0px 0px  5px 5px rgba(255,255,255,.3) !important`,
                bgcolor: theme.palette.primary.dark,
              },
            }}
            content={"CHECK IT NOW"}
          ></SecondaryButton>
        </Grid>
      </Grid>
      <Grid item xs={12} sx={{ bgcolor: "#a4a4a414" }}>
        <LogoesSlider />
      </Grid>
    </Grid>
  );
};

export default Section5;
