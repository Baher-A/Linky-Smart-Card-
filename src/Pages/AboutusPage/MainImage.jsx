import React from "react";
import MainImmage from "../../assets/AboutUs/MainImage.jpg";
import { Box } from "@mui/material";
const MainImage = () => {
  return (
    <svg
      width={"100%"}
      height={"100%"}
      id="sw-js-blob-svg"
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
      className="AboutusImage"
    >
      <defs>
        <linearGradient id="sw-gradient" x1="0" x2="1" y1="1" y2="0">
          <stop
            id="stop1"
            stopColor="rgba(55, 225.118, 248, 1)"
            offset="0%"
          ></stop>
          <stop
            id="stop2"
            stopColor="rgba(251, 31, 120.894, 1)"
            offset="100%"
          ></stop>
        </linearGradient>
      </defs>
      <path
        fill="none"
        d="M23.6,-27.4C31.6,-21.5,39.8,-15,42.2,-6.7C44.6,1.7,41.3,11.8,35.6,19.7C30,27.6,22.1,33.3,13.6,35.7C5,38.1,-4.1,37.3,-11.6,33.8C-19.1,30.2,-24.9,24,-30.7,16.5C-36.5,9,-42.2,0.3,-40.2,-6.4C-38.2,-13.2,-28.6,-17.9,-20.6,-23.9C-12.7,-29.9,-6.3,-37.1,0.7,-38C7.8,-38.9,15.6,-33.4,23.6,-27.4Z"
        width="100%"
        height="100%"
        transform="translate(50 50)"
        strokeWidth="1"
        style={{ transition: "all 0.3s ease 0s" }}
        stroke="url(#sw-gradient)"
      ></path>
    </svg>
  );
};

export default MainImage;
