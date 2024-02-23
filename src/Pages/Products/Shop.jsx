import {
  Box,
  Button,
  Card,
  Checkbox,
  Container,
  FormControlLabel,
  Grid,
  List,
  Rating,
  Slider,
  Typography,
} from "@mui/material";
import React, { useState } from "react";

import {
  ProductInformation,
  TopRatedProduct,
  marks,
} from "./ProductsInformation";
const Shop = () => {
  const [Slidervalue, setSlidervalue] = useState([150, 300]);
  const [Instock, setInstock] = useState(false);
  const [Onsale, setOnsale] = useState(false);
  const StepDistance = 50;
  const handleChange = (event, newValue) => {
    setSlidervalue(newValue);
    console.log(event);
  };

  return (
    <Container>
      <Grid container>
        {/* Drawer Section Of Shop Page */}
        <Grid
          item
          xs={3}
          sx={{ display: { md: "flex", xs: "none" }, flexDirection: "column" }}
        >
          <Box sx={{ padding: "10px", borderBottom: "1px solid grey" }}>
            <Typography variant="h7">FILTER BY PRICE</Typography>
            <Slider
              sx={{ color: "#ff0084" }}
              size="small"
              defaultValue={30}
              onChange={handleChange}
              valueLabelDisplay="auto"
              min={150}
              max={500}
              step={StepDistance}
              value={Slidervalue}
              marks={marks}
            />
            <Box
              sx={{
                display: "flex",
                mt: 1,

                alignItems: "center",
                justifyContent: "center",
                gap: 2,
              }}
            >
              <Typography variant="body2" sx={{ fontWeight: "bold" }}>
                <u style={{ color: "grey", textDecoration: "none" }}>
                  Price :{" "}
                </u>
                {` ${Math.min(Slidervalue[0], Slidervalue[1])} EGP _ ${Math.max(
                  Slidervalue[0],
                  Slidervalue[1]
                )} EGP `}{" "}
              </Typography>
              <Button variant="contained" sx={{ fontWeight: "bold" }}>
                Filter
              </Button>
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              borderBottom: "1px solid grey",
              padding: "10px",
            }}
          >
            <Typography variant="h7">STOCK STATUS</Typography>

            <FormControlLabel
              label="On sale"
              control={
                <Checkbox
                  color="primary"
                  checked={Onsale}
                  onChange={(event) => {
                    setOnsale(event.target.checked);
                  }}
                />
              }
            />
            <FormControlLabel
              label="In stock"
              control={
                <Checkbox
                  color="primary"
                  checked={Instock}
                  onChange={(event) => {
                    setInstock(event.target.checked);
                  }}
                />
              }
            />
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              padding: "10px",
            }}
          >
            <Typography variant="h7" fontWeight={"bold"}>
              TOP RATED PRODUCTS
            </Typography>
            <List>
              {TopRatedProduct.map((product, index) => {
                return (
                  <Card
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      mt: index > 0 ? 2 : 0,
                      padding: "5px",
                    }}
                    key={product.name}
                  >
                    <Box
                      component={"img"}
                      src={product.imagee}
                      sx={{
                        width: { lg: "100px", xs: "50px" },
                        height: { lg: "100px", xs: "50px" },
                        objectFit: "fill",
                        objectPosition: "center",
                      }}
                    />
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        ml: 2,
                        gap: 1,
                      }}
                    >
                      <Typography variant="subtitle1" fontWeight={"bold"}>
                        {product.name}
                      </Typography>
                      <Rating
                        value={product.RatingValue}
                        readOnly
                        name={product.name}
                      />
                      <Typography variant="subtitle1" color={"#29E6FF"}>
                        {product.price} EGP
                      </Typography>
                    </Box>
                  </Card>
                );
              })}
            </List>
          </Box>
        </Grid>
        {/* Products Section 'll Display in this Grid System  */}
        <Grid item xs={12} md={8}></Grid>
      </Grid>
    </Container>
  );
};

export default Shop;
