import React, { useEffect, useState } from "react";
import AppBar from "@mui/material/AppBar";

import {
  Box,
  Container,
  IconButton,
  Link,
  Toolbar,
  Typography,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";

import { useNavigate } from "react-router-dom";
import { ScrollToTopPAge } from "./Pages/ElementDesign/ObserverComp";

import Logo from "./assets/MainLogo.png";
import {
  Close,
  DarkMode,
  Home,
  Hub,
  Inventory,
  LightMode,
  Menu,
  SensorOccupied,
} from "@mui/icons-material";
import { useTheme } from "@emotion/react";
const AppBaar = ({ SetthemeMoode, themeMoode }) => {
  const theme = useTheme();
  const appitems = [
    { name: "HOME", path: "/", icon: Home },
    { name: "PERSONAL", path: "/personal", icon: SensorOccupied },
    { name: "PRODUCTS", path: "/products", icon: Inventory },
    { name: "ABOUT US", path: "/about-us", icon: Hub },
  ];
  const navigate = useNavigate();
  const [innerw, setinnerw] = useState(window.innerWidth);
  const [ToggleMenu, setToggleMenu] = useState(false);
  useEffect(() => {
    window.addEventListener("resize", () => {
      setinnerw(window.innerWidth);
      const AppBarheight = document.getElementById("AppBar");

      window.addEventListener("scroll", () => {
        if (window.scrollY >= AppBarheight.clientHeight) {
          document.getElementById("AppBar").style.position = "fixed";
          AppBarheight.style.opacity = "0.5";
        } else {
          AppBarheight.style.position = "relative";
          AppBarheight.style.opacity = "1";
        }
      });
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
          <Link
            sx={{ cursor: "pointer" }}
            onClick={() => {
              navigate("/");
              ScrollToTopPAge();
            }}
          >
            <Box
              component={"img"}
              src={Logo}
              sx={{ width: "180px", height: "80" }}
            ></Box>
          </Link>
          <Box
            sx={{
              display: { xs: "flex", md: "none" },
              justifyContent: "right",
              alignItems: "center",
              width: "100%",
            }}
          >
            <IconButton
              size="medium"
              sx={{ mr: "2px" }}
              onClick={() => {
                setToggleMenu(!ToggleMenu);
              }}
            >
              <Menu />
            </IconButton>
            <Typography variant="caption" sx={{ cursor: "pointer" }}>
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
                    ScrollToTopPAge();
                  }}
                  key={`${item.name} ${i}`}
                  to={item.path}
                  sx={{
                    textDecoration: "none",
                    color: theme.palette.text.primary,
                    cursor: "pointer",
                    padding: "3px",
                    transition: "all .5s ease-out",
                    mr: i != appitems.length - 1 ? "1.5rem" : "0px",
                    "&:hover": {
                      color: `gold`,
                      bgcolor: "unset",
                    },
                  }}
                >
                  <Typography fontWeight={"bold"}>{item.name}</Typography>
                </Link>
              );
            })}
          </Box>
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            <IconButton
              sx={{ bgcolor: "rgba(255,255,255,0.1)" }}
              onClick={() => {
                themeMoode == "light"
                  ? SetthemeMoode("dark")
                  : SetthemeMoode("light");
              }}
            >
              {themeMoode !== "dark" ? (
                <DarkMode sx={{ color: "rgba(255,255,255,0.7)" }} />
              ) : (
                <LightMode sx={{ color: `gold` }} />
              )}
            </IconButton>
          </Box>
        </Toolbar>
      </Container>
      <Box
        className={ToggleMenu == false ? "CloseMenu" : "OpenMenu"}
        sx={{
          position: "fixed",
          left: ".5vw",
          top: "20vh",
          borderRadius: "20px",
          width: "240px",
          opacity: 1,
          bgcolor: "rgba(255,255,255,0.2)",
          display: { xs: "flex", md: "none" },
        }}
      >
        <List
          sx={{
            width: "100%",
            position: "relative",
            padding: "0px",
            margin: 0,
            bgcolor: "rgba(0,0,0,0.8)",
            borderRadius: "20px",
            boxShadow: "0 0 5px 10px rgba(0,0,0,0.5)",
          }}
        >
          <ListItem
            disablePadding
            sx={{
              display: "flex",
              justifyContent: "space-between",
              padding: "8px 18px",
            }}
          >
            <IconButton
              sx={{
                justifySelf: "flex-end",
                position: "relative",
                bgcolor: "rgba(255,255,255,0.1)",
              }}
              onClick={() => {
                themeMoode == "light"
                  ? SetthemeMoode("dark")
                  : SetthemeMoode("light");
              }}
            >
              {themeMoode !== "dark" ? (
                <DarkMode
                  fontSize="small"
                  sx={{ color: "rgba(255,255,255,1)" }}
                />
              ) : (
                <LightMode fontSize="small" sx={{ color: `gold` }} />
              )}
            </IconButton>
            <IconButton
              sx={{
                justifySelf: "flex-end",
                position: "relative",
                bgcolor: "rgba(255,255,255,0.1)",
              }}
              onClick={() => {
                setToggleMenu(!ToggleMenu);
              }}
            >
              <Close
                fontSize="small"
                sx={{ color: "white", fontWeight: "bold" }}
              />
            </IconButton>
          </ListItem>
          {appitems.map((item, i) => {
            return (
              <ListItem sx={{ display: "flex" }} key={`${item.name}${i}`}>
                <ListItemButton
                  sx={{
                    borderRadius: "16px",
                    fontWeight: "bold",
                    display: "flex",
                    alignContent: "center",
                    padding: "10px",
                  }}
                  onClick={() => {
                    navigate(item.path);
                    ScrollToTopPAge();
                  }}
                >
                  <ListItemIcon
                    sx={{
                      color: "#0aa6c3",
                    }}
                  >
                    <item.icon
                      fontSize="medium"
                      sx={{ color: theme.palette.primary.main }}
                    />
                  </ListItemIcon>
                  <Typography
                    variant="subtitle1"
                    color={"white"}
                    fontWeight={"bold"}
                  >
                    {item.name}
                  </Typography>
                </ListItemButton>
              </ListItem>
            );
          })}
        </List>
      </Box>
    </AppBar>
  );
};

export default AppBaar;
