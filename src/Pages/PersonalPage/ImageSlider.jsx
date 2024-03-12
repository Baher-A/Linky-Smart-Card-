import React from "react";
import SilderImg1 from "../../assets/Slider/1.jpg";
import SilderImg2 from "../../assets/Slider/2.jpg";
import SilderImg3 from "../../assets/Slider/3.jpg";
import SilderImg4 from "../../assets/Slider/4.jpg";
import SilderImg5 from "../../assets/Slider/5.jpg";
import SilderImg6 from "../../assets/Slider/6.jpg";
import SilderImg7 from "../../assets/Slider/7.jpg";
import SilderImg8 from "../../assets/Slider/8.jpg";
import SilderImg9 from "../../assets/Slider/9.jpg";
import { Box, Stack } from "@mui/material";
const ArrSliderImg = [
  SilderImg1,
  SilderImg2,
  SilderImg3,
  SilderImg4,
  SilderImg5,
  SilderImg6,
  SilderImg7,
  SilderImg8,
  SilderImg9,
];
const ImageSlider = () => {
  // _____________________________________Custome image slider_____________________________________
  return (
    <Stack className="Scrooler">
      <Box className="Inner__scrooler">
        {ArrSliderImg.map((img, index) => (
          <Box className="imagecontainer" key={index} sx={{width:{xl:'260px',md:'200px',xs:'180px'}}}>
            <img src={img} alt={`SilderImg${index + 1}`} className="Imageees" />
          </Box>
        ))}
        {ArrSliderImg.map((img, index) => (
          <Box className="imagecontainer" key={index} sx={{width:{xl:'260px',md:'200px',xs:'180px'}}}>
            <img src={img} alt={`SilderImg${index + 1}`} className="Imageees" />
          </Box>
        ))}
      </Box>
    </Stack>
  );
};

// _____________________________________ Design by ExitoOooOo _____________________________________
export default ImageSlider;
