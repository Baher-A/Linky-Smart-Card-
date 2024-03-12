import {
  Avatar,
  Box,
  Button,
  Card,
  CardContent,
  Grid,
  Typography,
  useTheme,
} from "@mui/material";
import React from "react";
import {
  PermMediaOutlined,
  SaveOutlined,
  SentimentVerySatisfiedOutlined,
  SettingsVoice,
  Speed,
  ThumbUpAltOutlined,
} from "@mui/icons-material";
import PrimaryButton from "../ElementDesign/PrimaryButton";
export const NewGEN = [
  {
    icon: PermMediaOutlined,
    title: "Media sharing",
    subtitle:
      "Share all your media, including videos, photos, and any visual files or external links",
    GradientColor:
      "Linear-gradient(to left top, #03c6e3, #6ec0e5, #9abcdb, #b3b9cc, #bbbbbb)",
  },
  {
    icon: SentimentVerySatisfiedOutlined,
    title: "Customers Feed Back",
    subtitle:
      "Get direct messages from your customers by simply scanning your card",
    GradientColor: "linear-gradient(-15deg, #f12711, #f5af19)",
  },
  {
    icon: ThumbUpAltOutlined,
    title: "Social media links",
    subtitle:
      "Share links to all your social media platforms professionally with your clients or fans",
    GradientColor: "linear-gradient(-15deg, #7f00ff, #e100ff)",
  },
  {
    icon: SaveOutlined,
    title: "Save Contact",
    subtitle:
      "Make the process of saving your data as a contact easier With one click, your customers can save all your data on their phone",
    GradientColor: "linear-gradient(-60deg, #12c2e9, #c471ed, #f64f59)",
  },
  {
    icon: SettingsVoice,
    title: "Share audio files",
    subtitle:
      "There are no limits with the Linky Smart Card. Share any audio files with your customers to send a specific message in the appropriate language to them",
    GradientColor: "linear-gradient(90deg, #fc4a1a, #f7b733)",
  },
  {
    icon: Speed,
    title: "Performance",
    subtitle: "Get stable and highly efficient performance at any time, 24/7",
    GradientColor: "linear-gradient(90deg, #56ab2f, #a8e063)",
  },
];
const Section2 = () => {
  const theme = useTheme();
  return (
    <Box
      component={"section"}
      sx={{
        display: "flex",
        alignItems: "center",
        gap: "2rem",
        flexDirection: { xs: "column", md: "row" },
        height: "100%",
        my: { xs: 10, md: 15 }
      }}
    >
      <Box
        component={"div"}
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          flexGrow: "1",
          width: "50%",
        }}
      >
        <Typography
          component={'h2'}
          variant="h4"
          fontWeight={"bold"}
          textAlign={"center"}

        >
          New Generation of <br />
          <Typography
            sx={{
              color: `${theme.palette.primary.main}`,
              fontWeight: "bold",
              fontSize: { xs: "2.2rem", sm: "3.5rem" },
            }}
            variant="h2"
            component={"span"}
          >
            Smart
          </Typography>{" "}
          Card.
        </Typography>
        <Typography variant="body1" sx={{ my: 5 }} textAlign={"center"}>
          Learn about the capabilities of the new generation of smart cards from
          Linky, and join the future
        </Typography>
        <PrimaryButton
          content='CONTACT US'
          sx={{
            bgcolor: `${theme.palette.primary.dark}!important`,
            paddingX: "2rem",
            "&:hover": {
              boxShadow:
                theme.palette.mode == "light"
                  ? `1px 1px  5px 5px rgba(0,0,0,.3) !important`
                  : `0px 0px  5px 5px rgba(255,255,255,.3) !important`,
              bgcolor: theme.palette.primary.main,
            },
          }}
        >
        </PrimaryButton>
      </Box>

      <Box
        component={"div"}
        sx={{
          width: { xs: "100%", md: "50%" },
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Grid
          container
          spacing={1}
          sx={{ justifyContent: { xs: "space-evenly", md: "center" } }}
        >
          {NewGEN.map((item, i) => {
            return (
              <Grid key={item.title} item xs={12} sm={6} md={5}>
                <Card
                  sx={{
                    width: "100%",
                    height: "100%",
                    borderRadius: "30px",

                  }}
                >
                  <CardContent
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-evenly",
                      alignItems: "center",
                      padding: "1rem",
                      gap: 1,
                    }}
                  >
                    <Avatar
                      sx={{
                        backgroundImage: item.GradientColor,
                        width: "50px",
                        height: "50px",
                      }}
                    >
                      <item.icon
                        sx={{
                          color: `white`,
                          fontWeight: "bold",
                          fontSize: "2rem",
                        }}
                      />
                    </Avatar>
                    <Typography
                      textAlign={"center"}
                      variant="body1"
                      color={theme.palette.primary.main}
                      fontWeight={"bold"}
                    >
                      {item.title}
                    </Typography>
                    <Typography variant="caption" textAlign={"center"} sx={{color:theme.palette.text.secondary}}>
                      {item.subtitle}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            );
          })}
        </Grid>
      </Box>
    </Box>
  );
};

export default Section2;
