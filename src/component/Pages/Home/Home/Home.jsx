import React from "react";
import Banner from "../Banner/Banner";
import Information from "../../PageInformation/Information";

import Gallery from "../../Gallery/Gallery";
import Review from "../../Review/Review";
import HarryUp from "../../HarryUP/HarryUp";
import ContactUs from "../../ContactUs/ContactUs";
import Category from "../../Category/CategoryTab";
import NewCategory from "../../Category/NewCategory";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Information></Information>
      <HarryUp></HarryUp>
      {/* <Category></Category> */}
      <NewCategory></NewCategory>
      <Gallery></Gallery>
      <Review></Review>
      <ContactUs></ContactUs>
    </div>
  );
};

export default Home;
