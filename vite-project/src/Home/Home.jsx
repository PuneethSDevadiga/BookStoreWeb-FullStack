import React from "react";
import NavBar from "../components/NavBar";
import Banner from "../components/Banner";
import FreeBook from "../components/freeBook";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div className="bg-white text-black dark:bg-black dark:text-white" >
      <NavBar />
      <Banner />
      <FreeBook />
      <Footer />
    </div>
  );
};

export default Home;
