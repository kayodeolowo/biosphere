import React from "react";
import Hero from "./Hero";
import Header from "../components/Header";
import About from "./About";
import Services from "./Services";
import Started from "./Started";
import Footer from "./Footer";

const HomePage = () => {
  return (
    <div>
      <Header />
      <Hero />
      <About />
      <Services/>
      <Started/>
      <Footer/>
    </div>
  );
};

export default HomePage;
