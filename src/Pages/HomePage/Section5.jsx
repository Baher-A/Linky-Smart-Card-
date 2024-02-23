import { Box, Button, Grid, Typography } from "@mui/material";
import React from "react";
import LawyerImg from "../../assets/lawyer.png";
import { theme } from "../../Home.jsx";
const Section5 = () => {
  return (
    <Grid
      container
      component={"section"}
      mt={5}
      sx={{ alignItems: "center", justifyItems: "center" }}
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
            color: theme.palette.greey,
            fontSize: "25px",
          }}
        >
          Top Partners & Customers
        </Typography>
        <Typography
          variant="h2"
          component={"h4"}
          sx={{ padding: "10px", color: theme.palette.primary }}
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
                color: theme.palette.primary,
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
                  color: theme.palette.primary,
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
                color: theme.palette.primary,
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
                color: theme.palette.primary,
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
                  color: theme.palette.text,
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
                  color: theme.palette.primary,
                }}
              >
                Professional lawyers
              </Typography>
            </Box>
          </Grid>
          <Button variant="outlined" className="button-main">
            CHECK IT NOW
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Section5;
