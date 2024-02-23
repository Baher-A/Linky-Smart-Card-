import React, { useEffect } from "react";
import AppBar from "@mui/material/AppBar";

import {
  Box,
  Container,
  IconButton,
  Link,
  Toolbar,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { theme } from "./Home.jsx";
import Logo from "./assets/MainLogo.png";
import { DarkMode, LightMode, Menu } from "@mui/icons-material";
const AppBaar = ({ SetthemeMoode, themeMoode }) => {
  const appitems = [
    { name: "HOME", path: "/" },
    { name: "PERSONAL", path: "/personal" },
    { name: "PRODUCTS", path: "/products" },
    { name: "ABOUT US", path: "/about-us" },
  ];
  const navigate = useNavigate();
  useEffect(() => {
    const AppBarheight = document.getElementById("AppBar");
    window.addEventListener("scroll", () => {
      if (window.scrollY > AppBarheight.clientHeight) {
        document.getElementById("AppBar").style.position = "fixed";
        AppBarheight.style.opacity = "0.5";
      } else {
        document.getElementById("AppBar").style.position = "relative";
        AppBarheight.style.opacity = "1";
      }
    });
  }, []);
  return (
    <AppBar
      id="AppBar"
      position="fixed"
      sx={{
        transition: "all .5s",
        "&:hover": { opacity: "1 !important" },
      }}
    >
      <Container>
        <Toolbar disableGutters sx={{ alignItems: "center" }}>
          <Box
            component={"img"}
            src={Logo}
            sx={{ width: "180px", height: "80" }}
          ></Box>
          <Box
            sx={{
              display: { xs: "flex", md: "none" },
              justifyContent: "right",
              alignItems: "center",
              width: "100%",
            }}
          >
            <IconButton size="medium" sx={{ mr: "2px" }}>
              <Menu />
            </IconButton>
            <Typography variant="body1" sx={{ cursor: "pointer" }}>
              MENU
            </Typography>
          </Box>

          <Box
            sx={{
              flexGrow: "1",
              display: { xs: "none", md: "flex" },
              justifyContent: "center",
              alignItems: "center",
              mr: { sm: "2rem" },
            }}
          >
            {appitems.map((item, i) => {
              return (
                <Link
                  onClick={() => {
                    navigate(item.path);
                  }}
                  key={`${item.name} ${i}`}
                  to={item.path}
                  sx={{
                    textDecoration: "none",
                    color: theme.palette.primary.main,
                    cursor: "pointer",
                    padding: "3px",
                    transition: "all .5s ease-out",
                    mr: i != appitems.length - 1 ? "1.5rem" : "0px",
                    "&:hover": {
                      color: `${theme.palette.secondary.main}`,
                      bgcolor: "unset",
                    },
                  }}
                >
                  <Typography fontWeight={"bold"}>{item.name}</Typography>
                </Link>
              );
            })}
          </Box>
          <Box>
            <IconButton
              onClick={() => {
                themeMoode == "light"
                  ? SetthemeMoode("dark")
                  : SetthemeMoode("light");
              }}
            >
              {themeMoode !== "dark" ? (
                <LightMode sx={{ color: theme.palette.secondary.main }} />
              ) : (
                <DarkMode />
              )}
            </IconButton>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default AppBaar;
