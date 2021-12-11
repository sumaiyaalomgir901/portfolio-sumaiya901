import React from "react";
import Footer from "../../../Shared/Footer/Footer";
import Navigation from "../../../Shared/Navigation/Navigation";
import Contact from "../../AboutPage/Contact/Contact";
import HomeBanner from "../HomeBanner/HomeBanner";
import RecentProject from "../RecentProject/RecentProject";

const Home = () => {
  return (
    <div>
      <Navigation />
      <HomeBanner></HomeBanner>
      <RecentProject></RecentProject>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  );
};

export default Home;
