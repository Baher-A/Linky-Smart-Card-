import {
  Box,
  Button,
  Container,
  Grid,
  IconButton,
  Typography,
} from "@mui/material";

import IMGHome1 from "../../assets/Cards/black.png";
import IMGHome2 from "../../assets/Cards/yellow.png";
import IMGHome3 from "../../assets/Cards/red.png";
import React, { useRef } from "react";
import { theme } from "../../Home.jsx";
import { BubbleChart, ShoppingCart } from "@mui/icons-material";
import { Swiper, SwiperSlide } from "swiper/react";
const Productscolor = [{ name: "white" }, { name: "yellow" }, { name: "red" }];

const Section1 = () => {
  const SwiperRef = useRef(null);
  return (
    <Container
      component={"section"}
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "row",
      }}
    >
      <Grid
        container
        item
        sx={{
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Grid item xs={6}>
          <Typography
            variant="h2"
            color={theme.palette.text.main}
            sx={{
              fontSize: { xs: "20px", sm: "30px", md: "60px" },
              fontWeight: "bold",
              display: "block",
            }}
          >
            Basic <br />{" "}
            <u
              style={{
                fontSize: { xs: "35px", sm: "50px" },
                fontWeight: "bold",
                backgroundClip: "text",
                color: "transparent",

                backgroundImage:
                  "Linear-gradient(90deg,#29E6FF,#9A2390,#421867)",
                textDecoration: "none",
              }}
            >
              Smart
            </u>{" "}
            Card
          </Typography>

          {/* Color section */}
          <Box
            component={"div"}
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              my: 2,
            }}
          >
            <Typography
              variant="subtitle1"
              sx={{
                mr: 2,
                fontWeight: "bold",
                fontSize: { md: "20px", xs: "15px" },
              }}
            >
              Color :
            </Typography>
            {Productscolor.map((item, i) => {
              return (
                <IconButton
                  key={item.name}
                  sx={{ color: `${item.name}` }}
                  aria-label={`${item.name}Color`}
                  onClick={() => {
                    SwiperRef.current.swiper.slideTo(i);
                  }}
                >
                  <BubbleChart
                    sx={{ fontSize: { xs: "15px", sm: "20px", md: "25px" } }}
                  />
                </IconButton>
              );
            })}
          </Box>
          <Typography
            variant="caption"
            component={"h6"}
            sx={{
              color: `${theme.palette.grey[600]}`,
            }}
          >
            Choose Your Appropriate Design Or Learn About Design In The Store{" "}
          </Typography>
          <Typography
            variant="h5"
            sx={{ my: 2, fontSize: { xs: "15px", sm: "20px", md: "25px" } }}
          >
            200 EGP
          </Typography>
          <Button
            color="info"
            // className="PrimaryButton"
            variant="contained"
            sx={{
              width: { sm: "10rem", xs: "8rem" },
              paddingX: "2rem",
              whiteSpace: "nowrap",
              fontWeight: "bold",
              fontSize: { xs: "12px", sm: "15px" },
              bgcolor: `${theme.palette.primary.main}!important`,
              "&:hover": {
                boxShadow: `-1px -1px  10px 5px #29E6FF !important`,
              },
            }}
            endIcon={<ShoppingCart sx={{ color: theme.palette.Accent.main }} />}
          >
            Order Now
          </Button>
        </Grid>
        <Grid
          item
          xs={6}
          sx={{ position: "relative", transition: "all .5s ease-in-out" }}
        >
          <Swiper ref={SwiperRef} slidesPerView={1}>
            <SwiperSlide>
              <img src={IMGHome1} style={{ width: "100%" }} />
            </SwiperSlide>
            <SwiperSlide>
              <img src={IMGHome2} style={{ width: "100%" }} />
            </SwiperSlide>
            <SwiperSlide>
              <img src={IMGHome3} style={{ width: "100%" }} />
            </SwiperSlide>
          </Swiper>

          {/* <img
            id="Stack1"
            src={IMGHome1}
            alt="Bold-Black-Card"
            className="BGimg"
          />

          <img
            id="Stack2"
            src={IMGHome2}
            alt="Bold-Black-Card"
            className="BGimg Hide"
          />

          <img
            id="Stack3"
            src={IMGHome3}
            alt="Bold-Black-Card"
            className="BGimg Hide"
          /> */}
        </Grid>
      </Grid>
    </Container>
  );
};

export default Section1;
