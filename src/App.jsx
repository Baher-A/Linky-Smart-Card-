import { Outlet } from "react-router-dom";
import { ReactDOM, useEffect, useState } from "react";
import React from "react";
import AppBaar from "./AppBaar";
import { ThemeProvider, createTheme, styled } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";


import { Home } from "@mui/icons-material";
import { Button } from "@mui/material";
function App() {
  const [OpenDrawer, setOpenDrawer] = useState(false); 
  const toggleDrawer = (V) => () => {
    setOpenDrawer(V);
  }
  const [themeMoode, SetthemeMoode] = useState("dark");
  const MyTheme = createTheme({
    palette: {
      mode: `${themeMoode}`,
      ...(themeMoode === 'dark' ? {
        favcolor: {
          main:'#FFF'
        },
        ReviewText: {
          main:'black'
          
        },
        ReviewButtonText: {
          main:'#bdbdbd'

          
        }
        
        
        
      } : {
        favcolor: {
          main:'#AAA'
        },
        background: {
          default: '#EEE ',
          paper:'#EEF'
        },
          ReviewText: {
          main:'white'
          
        },
        ReviewButtonText: {
          main: '#e0e0e0'
          
          
        }
      })
    },
  });

  return (
    <ThemeProvider theme={MyTheme}>
      {/* {console.log(MyTheme.palette)} */}
      <CssBaseline />
      {/* ______________________________________________ App Bar ______________________________________________ */}
      <AppBaar themeMoode={themeMoode} SetthemeMoode={SetthemeMoode} />
      {/* ______________________________________________ Drawer Component ______________________________________________ */}
     {/* <Button onClick={toggleDrawer(false)}>Clickme</Button>
      <Drawer open={OpenDrawer} onClose={toggleDrawer(false)} variant="temporary">
        <Box  sx={{ width: '250px' ,height:'100vh', bgcolor: 'red' , zIndex:55 }}>

        </Box>
      </Drawer> */}
      {/* __________________________________________ Other pages Design __________________________________ */}
      <Outlet />
    </ThemeProvider>
  );
}

export default App;
