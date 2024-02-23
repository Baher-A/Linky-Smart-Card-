import { Outlet } from "react-router-dom";
import { ReactDOM, useEffect, useState } from "react";
import React from "react";
import AppBaar from "./AppBaar";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

function App() {
  const [themeMoode, SetthemeMoode] = useState("dark");
  const MyTheme = createTheme({
    palette: {
      mode: `${themeMoode}`,
    },
  });
  return (
    <ThemeProvider theme={MyTheme}>
      <CssBaseline />
      {/* ______________________________________________ App Bar ______________________________________________ */}
      <AppBaar themeMoode={themeMoode} SetthemeMoode={SetthemeMoode} />
      {/* __________________________________________ Other pages Design __________________________________ */}
      <Outlet />
    </ThemeProvider>
  );
}

export default App;
