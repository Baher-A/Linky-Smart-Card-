import {
  Box,
  Container,
  Grid,
  List,
  ListItem,
  ListItemText,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import Imagge from "../../assets/AboutUs/MainImage.jpg";
// import MainImage from "./MainImage.jsx";
const listtext = [
  "We are always honored by every person who joins the family",
  "We always try to help companies, individuals, and influencers achieve professional digital transformation and possess technological tools that help them appear better among their fans and customers.",
  "We try to be part of the future and play an essential role in providing leading services to customers in a professional manner, in addition to creating new cooperation at every stage that serves our goals that we believe in.",
];
const Section1 = () => {
  return (
    <Container component={"div"}>
      <Grid container>
        <Grid item xs={12} md={6}>
          <img
            src={Imagge}
            alt="MainImage"
            style={{ width: "100%", height: "100%" }}
            className="II"
          />
        </Grid>
        <Grid item xs={12} md={6}>
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
              sx={{ fontWeight: "bold", color: "#29E6FF" }}
            >
              We believe that we create the future with you.
            </Typography>
            <Typography variant="h4">About Linky</Typography>
            <List sx={{ padding: 0 }}>
              {listtext.map((item, index) => {
                return (
                  <ListItem key={index} sx={{ padding: 0 }}>
                    <ListItemText primary={item} />
                  </ListItem>
                );
              })}
            </List>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Section1;
