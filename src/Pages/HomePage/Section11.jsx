import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "../../../node_modules/swiper/swiper.css";
import img1 from "../../assets/Avatar/Samer.jpg";
import img2 from "../../assets/Avatar/Elkot.jpg";
import img3 from "../../assets/Avatar/Aymen.jpg";
import img4 from "../../assets/Avatar/Mohammed.jpg";
import img5 from "../../assets/Avatar/elznati.jpg";
import img6 from "../../assets/Avatar/Yousief.jpg";
import img7 from "../../assets/Avatar/Habeed.jpg";
import img8 from "../../assets/Avatar/shaf3e.jpg";
import img9 from "../../assets/Avatar/7.jpg";
import img10 from "../../assets/Avatar/Moaz.jpg";
import {
  Avatar,
  Box,
  Button,
  Card,
  Container,
  Typography,
} from "@mui/material";
import { theme } from "../../Home.jsx";
const CardContant = [
  {
    img: img1,
    caption:
      "We are happy to cooperate with Linky to help us communicate with our customers better",
    name: "Samer Hasan",
    subtitle: "Home Care / Ceo",
  },
  {
    img: img2,
    caption:
      "We made the most of our business through faster and easier communication with our customers using Linky services",
    name: "Mohamed Elkot",
    subtitle: "Elkot / Founder",
  },
  {
    img: img3,
    caption:
      "Communication with my brand has become more professional than in the past",
    name: "Ayman Henry",
    subtitle: "Prestige / Founder",
  },
  {
    img: img4,
    caption:
      "It has become very easy to access all our contact information with the help of Linky",
    name: "Mohamed Ashraf ",
    subtitle: "S4 / Founder",
  },
  {
    img: img5,
    caption:
      "We now display our products and all our data faster to our customers and achieve more sales opportunities",
    name: "Hasan Elzanati",
    subtitle: "Leo Brand / Founder",
  },
  {
    img: img6,
    caption:
      "We work on organizing parties and events, and we are happy to form a partnership with Linky to serve our customers",
    name: "Yousif Allam",
    subtitle: "Plan It / Founder",
  },
  {
    img: img7,
    caption:
      "I am very interested in reading reports about fans and the channels they reach them from, and this has become very easy with Linky",
    name: "Elhabeed",
    subtitle: "Influancer",
  },
  {
    img: img8,
    caption:
      "We have a large number of branches and services, and through Linky, access to all our information has become easier",
    name: "Ibrahim elshafey",
    subtitle: "wildhugs / Founder",
  },
  {
    img: img9,
    caption: "We are happy to obtain Linky's services to develop our business",
    name: "Ahmed Ads",
    subtitle: "Delonghi Espresso/ Founder",
  },
  {
    img: img10,
    caption:
      "We work in the field of marketing and Linky services have helped us a lot to develop our clients’ businesses",
    name: "Moaz Ahmed",
    subtitle: "Storm Agency / Co-founder",
  },
];
const Section11 = () => {
  const COntainerRef = useRef();
  return (
    <Container
      component={"div"}
      ref={COntainerRef}
      style={{ marginTop: "3rem" }}
    >
      <Box
        sx={{
          textAlign: "center",
        }}
      >
        <Typography variant={"h6"} color={theme.palette.primary.main}>
          Check out our latest
        </Typography>
        <Typography
          variant={"h4"}
          fontWeight="bold"
          color={theme.palette.primary.main}
          padding={"10px"}
        >
          Subscriber reviews
        </Typography>
        <Typography variant={"subtitle1"} color={theme.palette.grey[500]}>
          Clients to whom we are proud to provide our services and cooperate
          with them personally and commercially
        </Typography>
      </Box>
      <Swiper
        style={{
          padding: "20px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
        slidesPerView={1}
        breakpoints={{
          0: { slidesPerView: 1 },
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        spaceBetween={20}
        onChange={() => {
          console.log();
        }}
      >
        {CardContant.map((item, index) => {
          return (
            <SwiperSlide key={item.name}>
              <Card
                elevation={3}
                sx={{
                  padding: "20px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "10px",
                  borderRadius: "10px",
                  cursor: "grab",
                }}
              >
                <Avatar
                  src={item.img}
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    objectFit: "cover",
                    width: "70px",
                    height: "70px",
                  }}
                />
                <Box sx={{ textAlign: "center" }} component={"footer"}>
                  <Typography variant="caption">{item.caption}</Typography>
                  <br />
                  <Typography
                    variant="caption"
                    component={"span"}
                    sx={{ fontWeight: "bold" }}
                  >
                    {item.name}

                    <Typography variant="caption" component={"span"}>
                      {" - "}
                      {item.subtitle}
                    </Typography>
                  </Typography>
                </Box>
              </Card>
            </SwiperSlide>
          );
        })}
        <Button
          variant="outlined"
          sx={{
            fontWeight: "bold",
            color: `white`,
            mt: 3,
            padding: "0.5rem 1rem ",
            bgcolor: theme.palette.secondary.main,
            alignSelf: "center",
            borderColor: theme.palette.secondary.main,
            "&:hover": {
              bgcolor: theme.palette.secondary.light,
              borderColor: theme.palette.secondary.main,
            },
          }}
        >
          LEAVE A REVIEW
        </Button>
      </Swiper>
    </Container>
  );
};

export default Section11;
