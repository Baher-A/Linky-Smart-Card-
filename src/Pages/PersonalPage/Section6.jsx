import { Box, Container, Grid, Stack, Typography } from "@mui/material";
import React, { useEffect } from "react";
import BFimg from "../../assets/Cards/PesonalPage/1.jpg";
import { Xrotate, ShowTextt } from "../ElementDesign/ObserverComp";

const Section6 = () => {
  useEffect(() => {
    Xrotate(`BFimg`, `FliprightShow`,'FliprightHidden');
    ShowTextt('Section6Text', `ltr`);
  }, []);
  return (
    <Stack sx={{ my: { md: 20, xs: 15 } }}>
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
              <Typography variant="h7" className="HIdeText Section6Text">
                data communication technology
              </Typography>
              <Typography variant="h4" sx={{ fontWeight: "bold" }} className="HIdeText Section6Text"> 
                Different ways for a faster connection
              </Typography>
              <Typography
                variant="caption"
                sx={{ color: "grey", maxWidth: "480px" }}
                className="HIdeText Section6Text"
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
              <img id="BFimg" className="FliprightHidden" src={BFimg} alt="BFimg" style={{ width: "100%" }} />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Stack>
  );
};

export default Section6;
