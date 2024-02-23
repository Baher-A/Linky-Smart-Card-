import { Button, Stack, Typography } from "@mui/material";
import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import slider1 from "../../assets/Slider/1.jpg";
import slider2 from "../../assets/Slider/2.jpg";
import slider3 from "../../assets/Slider/3.jpg";
const Section1 = () => {
  const SwiperRef = useRef(null);
  return (
    <Stack sx={{ mt: "10rem", color: "white" }}>
      <Typography variant="h2">products</Typography>

      <Swiper
        ref={SwiperRef}
        slidesPerView={1}
        style={{ border: "1px solid red", width: "600px" }}
      >
        <SwiperSlide>
          <Typography variant="h2">Slide1</Typography>
          <img src={slider1} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <Typography variant="h2">Slide2</Typography>
          <img src={slider2} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <Typography variant="h2">Slide3</Typography>
          <img src={slider3} alt="" />
        </SwiperSlide>
      </Swiper>

      <Button
        onClick={() => {
          SwiperRef.current.swiper.slideTo(1);
        }}
        variant="contained"
        sx={{ width: "120px", margin: "3px" }}
      >
        Click Me1{" "}
      </Button>
      <Button
        onClick={() => {
          SwiperRef.current.swiper.slideTo(2);
        }}
        variant="contained"
        sx={{ width: "120px", margin: "3px" }}
      >
        Click Me2{" "}
      </Button>
      <Button
        onClick={() => {
          SwiperRef.current.swiper.slideTo(0);
        }}
        variant="contained"
        sx={{ width: "120px", margin: "3px" }}
      >
        Click Me3{" "}
      </Button>
    </Stack>
  );
};

export default Section1;
