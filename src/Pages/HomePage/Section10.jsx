import {
  Box,
  Button,
  Card,
  Container,
  Grid,
  Paper,
  Typography,
} from "@mui/material";
import React from "react";
import { theme } from "../../Home.jsx";
import VideoSection from "./VideoSection.jsx";
const DataSection2 = [
  {
    number: "200k",
    Title: "Daily",
  },
  {
    number: "100+",
    Title: "Brand",
  },
  {
    number: "10+",
    Title: "Partener",
  },
];
const Section10 = () => {
  return (
    <Container
      component={"section"}
      sx={{
        gap: 3,
        display: "flex",
        alignItems: "center",
        flexDirection: { xs: "column", md: "row" },
        my: { xs: 3, md: 5 },
      }}
    >
      <Paper
        elevation={4}
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          borderRadius: "10px",
          objectFit: "cover",
          width: { xs: "100%", md: "50%" },
        }}
      >
        <VideoSection />
      </Paper>

      <Box
        sx={{
          textAlign: "center",

          flexDirection: "column",
          width: { xs: "100%", md: "50%" },
          height: "100%",
        }}
      >
        <Typography
          variant="h4"
          sx={{ color: theme.palette.text, fontWeight: "bold" }}
        >
          Own{" "}
          <u
            style={{
              color: `${theme.palette.primary.main}`,
              textDecoration: "none",
            }}
          >
            technology
          </u>{" "}
          <br />
          of the future
        </Typography>
        <Typography
          variant="caption"
          component={"h6"}
          color={theme.palette.grey[500]}
          mt={3}
        >
          Step ahead of your competitors by owning new generation communication
          technology
        </Typography>
        <Box component={"div"} sx={{ width: "100%", textAlign: "left", mt: 3 }}>
          <Box
            sx={{
              bgcolor: theme.palette.grey[500],
              display: "flex",
              flexDirection: "column",
              width: "100%",
              borderRadius: "15px",
              color: "#DDD",
            }}
          >
            <Typography
              variant="caption"
              component={"h6"}
              sx={{
                bgcolor: theme.palette.primary.light,
                display: "flex",
                justifyContent: "space-between",
                borderRadius: "15px",
                padding: "5px",
                // color: "black",
                fontWeight: "bold",
                textDecoration: "none",
                objectFit: "fill",
                width: "94%",
                height: "100%",
              }}
            >
              Customers satisfied with the service
              <Typography
                variant="caption"
                component={"span"}
                fontWeight={"bold"}
              >
                94%
              </Typography>
            </Typography>
          </Box>
          <Grid container component={"div"} mt={3}>
            {DataSection2.map((item, i) => {
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
                  </Box>
                </Grid>
              );
            })}
          </Grid>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              mt: 3,
            }}
          >
            <Button
              variant="contained"
              sx={{
                fontWeight: "bold",
                mr: 3,
                bgcolor: theme.palette.primary.main,
                borderRadius: "15px",
                color: "black",
                "&:hover": {
                  boxShadow: `-1px -1px  10px 5px #29E6FF !important`,
                  bgcolor: theme.palette.primary.main,
                },
              }}
            >
              JOIN NOW
            </Button>
            <Button
              variant="outlined"
              sx={{
                fontWeight: "bold",
                color: `${theme.palette.Gang}`,
                borderRadius: "15px",
                // bgcolor: theme.palette.secondary.main,
                borderColor: theme.palette.secondary.main,
                "&:hover": {
                  bgcolor: theme.palette.secondary.main,
                  borderColor: theme.palette.secondary.main,
                },
              }}
            >
              GET TICKET
            </Button>
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default Section10;
