import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";
const SectionDesign = ({
  Pic,
  Step,
  SectionTitle,
  SectionCaption,
  imageView,
}) => {
  return (
    <Container sx={{ my: 5 }}>
      <Grid container direction={imageView == "left" ? "row" : "row-reverse"}>
        <Grid item xs={12} sm={6}>
          <img
            src={Pic}
            alt="Purchase-Card"
            style={{ width: "100%", height: "100%", maxWidth: "420px" }}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              width: "100%",
              height: "100%",
              gap: 2,
              padding: "20px",
            }}
          >
            <Typography variant="subtitle1" sx={{ color: "grey" }}>
              {Step}
            </Typography>
            <Typography variant="h4">{SectionTitle}</Typography>
            <Typography variant="subtitle2"> {SectionCaption}</Typography>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default SectionDesign;
