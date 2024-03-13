import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import Aboutus from "./Aboutus.jsx";
// -------------------------------- React router dom Operations --------------------------------

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Home from "./Home.jsx";
import Products from "./Products.jsx";
import PERSONAL from "./Pages/PersonalPage/PERSONAL.jsx";
import Shop from "./Pages/Products/Shop.jsx";
import ProductDesign from "./Pages/Products/ProductDesign.jsx";
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>

      <Route path="/Linky-Smart-Card" element={<Home />} />
      <Route index element={<Home />} />
      <Route path="/personal" element={<PERSONAL />} />
      <Route path="/about-us" element={<Aboutus />} />
      <Route path="/products" element={<Products />}>
        <Route index element={<Shop />} />
        <Route path="shop" element={<Shop />}>
          <Route index element={<Shop />} />          
        </Route>
        <Route path=":name" element={<ProductDesign />} />
      </Route>
      <Route
        path="*"
        element={<div style={{ color: "white" }}>Page not Font Error 404</div>}
      />
    </Route>
  )
);

//_______________________________________________________ Root _______________________________________________________

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);
