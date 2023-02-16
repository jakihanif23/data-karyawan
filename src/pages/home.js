import React from "react";
import Artikel from "../components/home-page/artikel/artikel";
import GridImage from "../components/home-page/grid/grid";
import FormKontak from "../components/home-page/form/form";
import SliderImage from "../components/home-page/slider/slider"

const Home = () => {
  
  return (
    <div className="uk-padding-medium">
      <SliderImage />
      <GridImage/>
      <Artikel/>
      <FormKontak/>
    </div>
  );
};

export default Home;
