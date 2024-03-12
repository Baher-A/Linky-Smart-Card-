import React, { useEffect } from "react";
import DataDiagram from "./DataDiagram.jsx";
import { Box, Container, Grid, Stack, Typography } from "@mui/material";
import { ShowTextt } from "../ElementDesign/ObserverComp";

const Section9 = () => {
  useEffect(() => {
    ShowTextt("Section9Text", `rtl`)
    const element1 = document.getElementById("darrr");
    const Observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          document.getElementById("Ddigramm").classList.add("Datadig");
          document.getElementById("DataLine").classList.add("ShowFigures");
          document.getElementById("DataDia").classList.add("ShowFigures2");
        } else {
          document.getElementById("Ddigramm").classList.remove("Datadig");
          document.getElementById("DataLine").classList.remove("ShowFigures");
          document.getElementById("DataDia").classList.remove("ShowFigures2");
        }
      });
    });
    Observer.observe(element1);
  }, []);
  return (
    <Stack sx={{ my: { md: 15, xs: 15 } }}>
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
              <Typography variant="h7" className="HIdeText Section9Text">personal cards analisis</Typography>
              <Typography variant="h4" sx={{ fontWeight: "bold" }} className="HIdeText Section9Text">
                Stats And Reports All The Time
              </Typography>
              <Typography
                id="darrr"
                variant="caption"
                sx={{ color: "grey", maxWidth: "480px" }}
                className="HIdeText Section9Text"
              >
                We provide a dashboard to track and know all possible statistics
                about your fans and visitors, who used to connect to your
                personal card
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                textAlign: "start",
                width: "100%",
                height: "100%",
                position: "relative",
              }}
              id="Ddigramm"
            >
              <DataDiagram />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Stack>
  );
};

export default Section9;
