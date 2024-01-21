import React from "react";
import Banner from "../Banner/Banner";
import Information from "../../PageInformation/Information";

import Gallery from "../../Gallery/Gallery";
import Review from "../../Review/Review";
import HarryUp from "../../HarryUP/HarryUp";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Information></Information>
      <HarryUp></HarryUp>
      <Gallery></Gallery>
      <Review></Review>
    </div>
  );
};

export default Home;
