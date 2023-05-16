import React from "react";
import Banner from "./Banner";
import Auction from "./Auction";
import Author from "./Author";
import Trending from "./Trending";
import Blog from "./Blog";
import Number from "./Number";
const Home = () => {
  return (
    <>
      <Banner />
      <Auction />
      <Author />
      <Trending />
      <Number />
      <Blog />
    </>
  );
};
export default Home;
