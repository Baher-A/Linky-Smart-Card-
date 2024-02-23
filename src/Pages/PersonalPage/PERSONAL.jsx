import React from "react";
import Section1 from "./Section1";
import Section2 from "./Section2";
import Section3 from "./Section3";
import Section4 from "./Section4";
import Section5 from "./Section5";
import Section6 from "./Section6";
import Section7 from "./Section7";
import Section8 from "./Section8";
import Section9 from "./Section9";
import Section10 from "./Section10";
import Section11 from "./Section11";
import FOooOter from "../HomePage/Section12.jsx";
import SectionDesign from "./SectionDesign.jsx";
import { Stack } from "@mui/material";
import PurchaseCardimg from "../../assets/Cards/PesonalPage/SEctionDesignImg/Purchase-Card.svg";
import CreateProfileimg from "../../assets/Cards/PesonalPage/SEctionDesignImg/Create-Profile.svg";
import ShareProfileimg from "../../assets/Cards/PesonalPage/SEctionDesignImg/ShareProfile.svg";
const SectionDesignData = [
  {
    Pic: PurchaseCardimg,
    SectionTitle: "Purchase Your Card",
    SectionCaption:
      "After placing your order, you will receive instructions on how to provide us with your logo or design for on the card.",
    imageView: "left",
  },
  {
    Pic: CreateProfileimg,
    SectionTitle: "Create Your Profile",
    SectionCaption:
      "Here you can add, edit & enable what you would like to share with your contactless card.",
    imageView: "right",
  },
  {
    Pic: ShareProfileimg,
    SectionTitle: "Tap, Share & Go",
    SectionCaption:
      "It's that simple! Share who you are and what you do with with one quick tap.",
    imageView: "left",
  },
];
const PERSONAL = () => {
  return (
    <Stack>
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 text={"Smart Business Card"} />
      <Section6 />
      <Section7 />
      <Section8 />
      <Section9 />
      <Section10 />
      <Section11 />
      <Section5 text={"How can I start ?"} />
      {SectionDesignData.map((item, index) => {
        return (
          <SectionDesign
            key={item.SectionTitle}
            Pic={item.Pic}
            Step={`Step${index + 1}`}
            SectionTitle={item.SectionTitle}
            SectionCaption={item.SectionCaption}
            imageView={item.imageView}
          />
        );
      })}
      <FOooOter />
    </Stack>
  );
};

export default PERSONAL;
