import React from "react";
import Navigation from "../../../Shared/Navigation/Navigation";
import HomeBanner from "../HomeBanner/HomeBanner";
import RecentProject from "../RecentProject/RecentProject";

const Home = () => {
  return (
    <div>
      <Navigation />
      <HomeBanner></HomeBanner>
      <RecentProject></RecentProject>
    </div>
  );
};

export default Home;
