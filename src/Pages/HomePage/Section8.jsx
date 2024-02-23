import { Box, Button, Grid, Typography } from "@mui/material";
import React from "react";
import ConferanceImg from "../../assets/imgAGE.png";
import { theme } from "../../Home.jsx";
const Section8 = () => {
  const DataSection = [
    {
      number: "30+",
      Title: "Partners",
      Caption: "Partners & Co founders",
    },
    {
      number: "240+",
      Title: "Successful deal",
      Caption: "Share with our partners",
    },
    {
      number: "3000+",
      Title: "Online Account",
      Caption: "Existing clients",
    },
  ];
  return (
    <Grid container component={"section"} my={5}>
      <Grid item xs={12} md={6}>
        <Box
          sx={{
            width: "100%",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            gap: 3,
            textAlign: "center",
          }}
        >
          <Typography variant="h3" fontWeight="bold">
            Business cooperation
          </Typography>
          <Typography
            variant="caption"
            fontWeight="bold"
            color={theme.palette.grey[500]}
          >
            Share our success and join the list of our distinguished partners
          </Typography>
          <Grid container component={"div"}>
            {DataSection.map((item, i) => {
              return (
                <Grid item xs={4} key={item.Title}>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <Typography
                      variant="h4"
                      fontWeight="bold"
                      color={theme.palette.primary.main}
                    >
                      {item.number}{" "}
                    </Typography>
                    <Typography variant={"h7"} fontWeight="bold">
                      {item.Title}
                    </Typography>
                    <Typography
                      variant="caption"
                      fontWeight="bold"
                      color={theme.palette.grey[500]}
                    >
                      {item.Caption}
                    </Typography>
                  </Box>
                </Grid>
              );
            })}
          </Grid>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              width: "100%",
              mt: 3,
            }}
          >
            <Button
              variant="contained"
              color="primary"
              sx={{ fontWeight: "bold", mr: 3 }}
            >
              MAKE A DEAL
            </Button>
            <Button
              variant="outlined"
              color="primary"
              sx={{ fontWeight: "bold" }}
            >
              Contact Us
            </Button>
          </Box>
        </Box>
      </Grid>
      <Grid item xs={12} md={6}>
        <Box
          sx={{
            width: "100%",
            height: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img
            src={ConferanceImg}
            alt="ConferanceImg"
            style={{ maxWidth: "800px", minWidth: "450px" }}
          />
        </Box>
      </Grid>
    </Grid>
  );
};

export default Section8;
