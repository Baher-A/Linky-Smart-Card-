import { Box, Button, Grid, Typography, useTheme } from "@mui/material";
import Home1 from "../../assets/Home1.png";
import { section3 as content } from "../../assets/Projectinfo";
import React from "react";
import { useNavigate } from "react-router-dom";
import PrimaryButton from "../ElementDesign/PrimaryButton";
import { ScrollToTopPAge } from "../ElementDesign/ObserverComp";
const fontsizee = {
  title: { xs: "40px", sm: "30px", md: "60px" },
  caption: { xs: "15px", sm: "15px", md: "18px" },
};

const Section3 = () => {
  const navigat = useNavigate();
  const theme = useTheme();
  return (
    <Box component={"section"} sx={{ my: { xs: 10, md: 15 } }}>
      <Grid container item>
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img
            src={Home1}
            alt="Bold-Black-Card"
            style={{ objectFit: "cover", maxWidth: "600px" }}
          />
        </Grid>

        <Grid item xs={12} md={6}>
          <Box
            sx={{
              width: "100%",
              height: "100%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <Typography
              variant="h2"
              sx={{
                textAlign: "center",
                fontSize: {
                  xs: fontsizee.title.xs,
                  sm: fontsizee.title.sm,
                  md: fontsizee.title.md,
                },
              }}
            >
              Anti{" "}
              <u
                style={{
                  color: `${theme.palette.primary.main}`,
                  textDecoration: "none",
                }}
              >
                Scratch
              </u>{" "}
              <br /> Business Card
            </Typography>
            <Typography
              variant="caption"
              sx={{
                textAlign: "center",
                color: theme.palette.text.secondary,
                display: "block",
                padding: "1rem",
              }}
            >
              {content[0].caption}
            </Typography>
            <Grid
              container
              item
              my={5}
              gap={2}
              sx={{
                alignItems: "center",
                alignContent: "center",
                justifyContent: "space-around",
              }}
            >
              <Grid item xs={5}>
                <Typography
                  variant="h4"
                  sx={{
                    textAlign: "center",
                    color: theme.palette.primary.main,
                  }}
                >
                  1.
                </Typography>
                <Typography
                  variant="h6"
                  sx={{
                    textAlign: "center",
                  }}
                >
                  {content[1].scratch1.title}
                </Typography>
                <Typography
                  variant="caption"
                  color={theme.palette.text.secondary}
                  sx={{ textAlign: "center", display: "block" }}
                >
                  {content[1].scratch1.caption}
                </Typography>
              </Grid>
              <Grid item xs={5}>
                <Typography
                  variant="h4"
                  sx={{
                    textAlign: "center",
                    color: theme.palette.primary.main,
                  }}
                >
                  2.
                </Typography>
                <Typography
                  variant="h6"
                  sx={{
                    textAlign: "center",
                  }}
                >
                  {content[1].scratch2.title}
                </Typography>
                <Typography
                  variant="caption"
                  color={theme.palette.text.secondary}
                  sx={{ textAlign: "center", display: "block" }}
                >
                  {content[1].scratch2.caption}
                </Typography>
              </Grid>
              <Grid item xs={5}>
                <Typography
                  variant="h4"
                  sx={{
                    textAlign: "center",
                    color: theme.palette.primary.main,
                  }}
                >
                  3.
                </Typography>
                <Typography
                  variant="h6"
                  sx={{
                    textAlign: "center",
                  }}
                >
                  {content[1].scratch3.title}
                </Typography>
                <Typography
                  color={theme.palette.text.secondary}
                  variant="caption"
                  sx={{ textAlign: "center", display: "block" }}
                >
                  {content[1].scratch3.caption}
                </Typography>
              </Grid>
              <Grid item xs={5}>
                <Typography
                  variant="h4"
                  sx={{
                    textAlign: "center",
                    color: theme.palette.primary.main,
                  }}
                >
                  4.
                </Typography>
                <Typography
                  variant="h6"
                  sx={{
                    textAlign: "center",
                  }}
                >
                  {content[1].scratch4.title}
                </Typography>
                <Typography
                  color={theme.palette.text.secondary}
                  variant="caption"
                  sx={{ textAlign: "center", display: "block" }}
                >
                  {content[1].scratch4.caption}
                </Typography>
              </Grid>
            </Grid>
            <PrimaryButton
              content={"GET YOUR CARD"}
              onClick={() => {
                navigat("./products/Bold-Card");
                ScrollToTopPAge();
              }}
              sx={{
                mt: 3,
                alignSelf: "center",
                bgcolor: theme.palette.primary.dark,
                paddingX: "2rem",
                "&:hover": {
                  boxShadow:
                    theme.palette.mode == "light"
                      ? `1px 1px  5px 5px rgba(0,0,0,.3) !important`
                      : `0px 0px  5px 5px rgba(255,255,255,.3) !important`,
                  bgcolor: theme.palette.primary.main,
                },
              }}
            ></PrimaryButton>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Section3;
