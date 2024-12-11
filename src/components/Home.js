import React from "react";
import Banner from "./Banner";
import CategorySlider from "./Categoryslider";
import Viwe from "./Viwe";
import Products from "./Products";
import Banner2 from "./Banner2";
import Banner3 from "./Banner3";
import Offers from "./Offers";
import Newsletter from "./Newslater";
import Footer from "./Footer";

function Home() {
  return (
    <div style={{ backgroundColor: "#15152b" }}>
      <Banner />
      <CategorySlider />
      <Viwe />
      <Products />
      <Banner2 />
      <Banner3 />
      <Offers />
      <Newsletter />
      <Footer />
    </div>
  );
}

export default Home;
