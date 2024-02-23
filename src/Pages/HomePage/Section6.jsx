import { Button, Container, Grid, Typography } from "@mui/material";
import React from "react";
import { theme } from "../../Home.jsx";
import Sectionimg from "../../assets/Sectionimg6.png";

const Section6 = () => {
  return (
    <Container sx={{ mt: { xs: 5, md: 10 } }}>
      <Grid container sx={{ alignItems: "center" }}>
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            width: "100%",
            height: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img
            src={Sectionimg}
            alt="Section6Img"
            style={{
              maxWidth: "480px",
              maxHeight: "520px",
              width: "100%",
              height: "100%",
            }}
          />
        </Grid>
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            textAlign: "center",
            width: "100%",
            alignItems: "center",
            padding: "8px",
          }}
        >
          <Typography variant="h2" sx={{ fontWeight: "bold" }}>
            Get Your Full <br />
            <u
              style={{
                color: theme.palette.primary.main,
                textDecoration: "none",
              }}
            >
              Customize
            </u>{" "}
            Profile
          </Typography>
          <Typography variant="caption" component={"h6"} sx={{ mt: "10px" }}>
            Create something unique and design your profile to fully express you
            through a set of professional tools that do not require any
            programming experience.
          </Typography>
          <Button variant="contained" sx={{ mt: "10px", fontWeight: "bold" }}>
            CONTACT US
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Section6;
