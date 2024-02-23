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
    <div className="Scrooler">
      <div className="Inner__scrooler">
        {ArrSliderImg.map((img, index) => (
          <div className="imagecontainer" key={index}>
            <img src={img} alt={`SilderImg${index + 1}`} className="Imageees" />
          </div>
        ))}
        {ArrSliderImg.map((img, index) => (
          <div className="imagecontainer" key={index}>
            <img src={img} alt={`SilderImg${index + 1}`} className="Imageees" />
          </div>
        ))}
      </div>
    </div>
  );
};

// _____________________________________ Design by ExitoOooOo _____________________________________
export default ImageSlider;
