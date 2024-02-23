import { Box, Container, Grid, Paper, Typography } from "@mui/material";
import React from "react";
import Alsabry from "../../assets/AboutUs/oUR HERO/Elsabry.jpg";
import Tarik from "../../assets/AboutUs/oUR HERO/tarekjpg.jpg";
import Samy from "../../assets/AboutUs/oUR HERO/samy.jpg";
import Mariam from "../../assets/AboutUs/oUR HERO/mariam.jpg";
import Marwan from "../../assets/AboutUs/oUR HERO/marwan.jpg";
import AhmedHassan from "../../assets/AboutUs/oUR HERO/ahmed-hasan.jpg";
import Hamed from "../../assets/AboutUs/oUR HERO/hamed.jpg";
import AhmedSibity from "../../assets/AboutUs/oUR HERO/ahmed-sibity.jpg";
const OurHero = [
  {
    img: Alsabry,
    Name: "Mohamed Elsabry",
    CurrentPosition: "CEO / FOUNDER",
  },
  {
    img: Tarik,
    Name: "Tarik Abdelrazik",
    CurrentPosition: "Legal Affairs",
  },
  {
    img: Samy,
    Name: "Mohamed Samy",
    CurrentPosition: "Lead Account Manager",
  },
  {
    img: Mariam,
    Name: "Mariam Hany",
    CurrentPosition: "pr support",
  },
  {
    img: Marwan,
    Name: "Marawan Yousif",
    CurrentPosition: "Customer Support",
  },
  {
    img: AhmedHassan,
    Name: "Ahmed Hasan",
    CurrentPosition: "Sales Manger",
  },
  {
    img: Hamed,
    Name: "Hamed Elarwash",
    CurrentPosition: "Accountant",
  },
  {
    img: AhmedSibity,
    Name: "Ahmed Elsibety",
    CurrentPosition: "Social Partner",
  },
];
const Section2 = () => {
  return (
    <Container component={"div"} sx={{ mt: 5 }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          gap: 2,
          width: "100%",
          height: "100%",
        }}
      >
        <Typography
          variant="subtitle2"
          textAlign={"center"}
          sx={{ fontWeight: "bold", color: "#29E6FF" }}
        >
          Meet
        </Typography>
        <Typography variant="h4" textAlign={"center"}>
          Our Hero's
        </Typography>
        <Typography
          variant="subtitle1"
          sx={{ color: "grey", textAlign: "center" }}
        >
          We are always working to develop our services and obtaining the
          satisfaction of our customers is essential to us
        </Typography>
      </Box>
      <Grid container mt={3} spacing={4}>
        {OurHero.map((Hero, Index) => {
          return (
            <Grid item xs={12} sm={6} md={3} key={Hero.Name}>
              <Paper
                elevation={24}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: "25px",
                  width: "100%",
                }}
              >
                <img
                  src={Hero.img}
                  alt={Hero.Name}
                  style={{ width: "100%", borderRadius: "25px" }}
                />
              </Paper>
              <Typography
                variant="subtitle1"
                textAlign={"center"}
                mt={3}
                fontWeight={600}
              >
                {Hero.Name}
              </Typography>
              <Typography
                variant="subtitle2"
                sx={{ color: "grey", textAlign: "center" }}
              >
                {Hero.CurrentPosition}
              </Typography>
            </Grid>
          );
        })}
      </Grid>
    </Container>
  );
};

export default Section2;
