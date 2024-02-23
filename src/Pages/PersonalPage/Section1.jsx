import {
  Box,
  Button,
  Container,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import React, { useRef } from "react";
import Home1 from "../../assets/Home1.png";
import img1 from "../../assets/Cards/PesonalPage/1.jpg";
import img2 from "../../assets/Cards/PesonalPage/2.png";
import img3 from "../../assets/Cards/PesonalPage/3.png";
import img4 from "../../assets/Cards/PesonalPage/4.png";
import img5 from "../../assets/Cards/PesonalPage/5.png";
import { Swiper, SwiperSlide } from "swiper/react";
const bg = "#c5c5c5";
const IconsImage = [img5, img2, img3, img4];
const Section1 = () => {
  const SwiperRef = useRef(null);
  return (
    <Stack
      sx={{
        mt: "1rem",
        backgroundImage: "linear-gradient(90deg,#c5c5c5,#d5d5d5,#e5e5e5)",
        // bgcolor: `${bg}`,
        borderTopRightRadius: { md: "7rem", xs: "3rem" },
        borderBottomLeftRadius: { md: "7rem", xs: "3rem" },
      }}
    >
      <Container sx={{ display: "flex", alignItems: "center" }}>
        <Box
          sx={{
            width: "50%",
            display: "flex",
            flexDirection: "column",
            gap: 1,
          }}
        >
          {/* Text Content */}

          <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
            <Typography
              variant="h2"
              sx={{ color: "black", fontWeight: "bold" }}
            >
              Premium <br />
              Smart Card
            </Typography>
            <Typography variant="caption" sx={{ color: "grey" }}>
              the best selling product in the egyption market <br />
              100mAh - avaliable in all colors
            </Typography>
          </Box>

          {/* Buttons Container */}
          <Box
            component={"div"}
            sx={{
              display: "flex",
              // justifyContent: "center",
              alignItems: "center",
            }}
          >
            {IconsImage.map((icon, i) => {
              return (
                <IconButton
                  onClick={() => {
                    SwiperRef.current.swiper.slideTo(i);
                  }}
                  key={i}
                  sx={{
                    width: "50px",
                    height: "50px",
                    padding: "0px",
                    mr: i != IconsImage.length - 1 ? "10px" : "0px",
                    borderStyle: "unset",
                    ":&hover": {
                      backgroundColor: "none !important",
                    },
                  }}
                >
                  <img
                    src={icon}
                    alt=""
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "contain",
                    }}
                  />
                </IconButton>
              );
            })}
          </Box>

          <Box
            component={"div"}
            sx={{
              display: "flex",
              alignItems: "center",
              gap: { xs: 1, sm: 3 },
              flexDirection: { xs: "column", sm: "row" },
            }}
          >
            <Typography
              variant="h5"
              sx={{ color: "black", fontWeight: "bold" }}
            >
              300 EGP
            </Typography>
            <Button
              variant="contained"
              sx={{
                bgcolor: "black",
                color: "white",
                fontWeight: "bold",
                borderRadius: "16px",
              }}
            >
              Add To Cart
            </Button>
          </Box>
        </Box>
        <Box
          sx={{
            width: "50%",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Swiper slidesPerView={1} ref={SwiperRef} style={{ width: "100%" }}>
            {IconsImage.map((icon, index) => {
              return (
                <SwiperSlide key={index}>
                  <img
                    src={icon}
                    alt=""
                    style={{
                      width: "100%",
                      height: "100%",
                      // objectFit: "contain",
                    }}
                  />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </Box>
      </Container>
    </Stack>
  );
};

export default Section1;
