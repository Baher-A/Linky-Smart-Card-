import { Stack } from "@mui/material";
import React from "react";
import Section1 from "./Pages/AboutusPage/Section1.jsx";
import Section2 from "./Pages/AboutusPage/Section2.jsx";
import Section3 from "./Pages/AboutusPage/Section3.jsx";
import Section12 from "./Pages/HomePage/Section12.jsx";
const Aboutus = () => {
  return (
    <Stack component={"section"}>
      <Section1 />
      <Section2 />
      <Section3 />
      <Section12 />
    </Stack>
  );
};

export default Aboutus;
