import { Box, Container, Grid, Stack, Typography } from "@mui/material";
import React from "react";

const SectionData = [
  {
    Number: 420,
    Title: "SATISFIED CLIENTS",
  },
  {
    Number: 3000,
    Title: "FINISHED PROJECTS",
  },
  {
    Number: 120,
    Title: "ACTIVE BUSINESS",
  },
  {
    Number: 250000,
    Title: "DAILY ACTION",
  },
];
const Section3 = () => {
  return (
    <Stack className="AboutusBg" my={5} padding={"40px"}>
      <Container
        sx={{
          display: "flex",
          alignItems: "center",
          flexDirection: { xs: "column", md: "row" },
        }}
      >
        <Box
          sx={{
            width: { xs: "100%", md: "50%" },
            padding: "10px",
            height: "100%",
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            alignItems: "center",
            flexGrow: 1,
          }}
        >
          <Typography
            variant="subtitle2"
            textAlign={"center"}
            color={"#00BDD6"}
          >
            Join us and be a partner for success{" "}
          </Typography>
          <Typography variant="h4" textAlign={"center"} color={"#FFF"}>
            Start your digital transformation now
          </Typography>
        </Box>
        <Grid container>
          {SectionData.map((Data, inedex) => {
            return (
              <Grid
                key={Data.Title}
                item
                xs={6}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: "column",
                  padding: "20px",
                  borderRight:
                    inedex == 0 || inedex == 2 ? "1px solid #DDD" : "none",
                  borderBottom: "1px solid #DDD",
                }}
              >
                <Typography variant="h4" textAlign={"center"} color={"#FFF"}>
                  {Data.Number}
                </Typography>
                <Typography
                  variant="h6"
                  textAlign={"center"}
                  sx={{ color: "#CCC" }}
                >
                  {Data.Title}
                </Typography>
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </Stack>
  );
};

export default Section3;
    // "swiper": "^11.0.7"
    // "react-router-dom": "^6.21.3"
    // "react-dom": "^18.2.0"
// 