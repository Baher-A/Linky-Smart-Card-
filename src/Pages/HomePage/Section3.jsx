import { Box, Grid, Typography } from "@mui/material";
import Home1 from "../../assets/Home1.png";
import { section3 as content } from "../../assets/Projectinfo";
import React from "react";
import { theme } from "../../Home.jsx";
const fontsizee = {
  title: { xs: "40px", sm: "30px", md: "60px" },
  caption: { xs: "15px", sm: "15px", md: "18px" },
};

const Section3 = () => {
  return (
    <Box component={"section"} mt={10}>
      <Grid container item>
        <Grid item xs={12} sm={6} md={6}>
          <img src={Home1} alt="Bold-Black-Card" className="BGimg" />
        </Grid>

        <Grid item xs={12} sm={6} md={6}>
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
                  fontSize: {
                    xs: fontsizee.title.xs,
                    sm: fontsizee.title.sm,
                    md: fontsizee.title.md,
                  },
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
                color: theme.palette.grey.main,
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
                  variant="h2"
                  sx={{
                    textAlign: "center",
                    color: theme.palette.primary.main,
                    fontSize: {
                      xs: fontsizee.title.xs,
                      sm: fontsizee.title.sm,
                      md: fontsizee.title.md,
                    },
                  }}
                >
                  1.
                </Typography>
                <Typography
                  variant="h6"
                  sx={{
                    textAlign: "center",
                    fontSize: {
                      xs: fontsizee.caption.xs,
                      sm: fontsizee.caption.sm,
                      md: fontsizee.caption.md,
                    },
                  }}
                >
                  {content[1].scratch1.title}
                </Typography>
                <Typography
                  variant="caption"
                  sx={{ textAlign: "center", display: "block" }}
                >
                  {content[1].scratch1.caption}
                </Typography>
              </Grid>
              <Grid item xs={5}>
                <Typography
                  variant="h2"
                  sx={{
                    textAlign: "center",
                    color: theme.palette.primary.main,
                    fontSize: { xs: "20px", sm: "30px", md: "60px" },
                  }}
                >
                  2.
                </Typography>
                <Typography
                  variant="h6"
                  sx={{
                    textAlign: "center",
                    fontSize: {
                      xs: fontsizee.caption.xs,
                      sm: fontsizee.caption.sm,
                      md: fontsizee.caption.md,
                    },
                  }}
                >
                  {content[1].scratch2.title}
                </Typography>
                <Typography
                  variant="caption"
                  sx={{ textAlign: "center", display: "block" }}
                >
                  {content[1].scratch2.caption}
                </Typography>
              </Grid>
              <Grid item xs={5}>
                <Typography
                  variant="h2"
                  sx={{
                    textAlign: "center",
                    color: theme.palette.primary.main,
                    fontSize: { xs: "20px", sm: "30px", md: "60px" },
                  }}
                >
                  3.
                </Typography>
                <Typography
                  variant="h6"
                  sx={{
                    textAlign: "center",
                    fontSize: {
                      xs: fontsizee.caption.xs,
                      sm: fontsizee.caption.sm,
                      md: fontsizee.caption.md,
                    },
                  }}
                >
                  {content[1].scratch3.title}
                </Typography>
                <Typography
                  variant="caption"
                  sx={{ textAlign: "center", display: "block" }}
                >
                  {content[1].scratch3.caption}
                </Typography>
              </Grid>
              <Grid item xs={5}>
                <Typography
                  variant="h2"
                  sx={{
                    textAlign: "center",
                    color: theme.palette.primary.main,
                    fontSize: { xs: "20px", sm: "30px", md: "60px" },
                  }}
                >
                  4.
                </Typography>
                <Typography
                  variant="h6"
                  sx={{
                    textAlign: "center",
                    fontSize: {
                      xs: fontsizee.caption.xs,
                      sm: fontsizee.caption.sm,
                      md: fontsizee.caption.md,
                    },
                  }}
                >
                  {content[1].scratch4.title}
                </Typography>
                <Typography
                  variant="caption"
                  sx={{ textAlign: "center", display: "block" }}
                >
                  {content[1].scratch4.caption}
                </Typography>
              </Grid>
            </Grid>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Section3;
