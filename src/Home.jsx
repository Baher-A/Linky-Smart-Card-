import { Stack, createTheme } from "@mui/material";
import React, { useState } from "react";
import Section1 from "./Pages/HomePage/Section1.jsx";
import Section2 from "./Pages/HomePage/Section2.jsx";
import Section3 from "./Pages/HomePage/Section3.jsx";
import Section4 from "./Pages/HomePage/Section4.jsx";
import Section5 from "./Pages/HomePage/Section5.jsx";
import Section6 from "./Pages/HomePage/Section6.jsx";
import Section7 from "./Pages/HomePage/Section7.jsx";
import Section8 from "./Pages/HomePage/Section8.jsx";
import Section9 from "./Pages/HomePage/Section9.jsx";
import Section10 from "./Pages/HomePage/Section10.jsx";
import Section11 from "./Pages/HomePage/Section11.jsx";
import Section12 from "./Pages/HomePage/Section12.jsx";
const Home = () => {
  return (
    <Stack component={"main"}>
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <Section6 />
      <Section7 />
      <Section8 />
      <Section9 />
      <Section10 />
      <Section11 />
      <Section12 />
    </Stack>
  );
};

export default Home;
