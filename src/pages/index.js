import * as React from "react";
import Services from "../components/Services";
import Contact from "../components/Contact";
import About from "../components/About";
import Projects from "../components/Projects";
import Layout from "../components/Layout";
import Footer from "../components/Footer";
import Home from "../components/Home";
import Image from "../images/banner-bg.png";
const Index = () => {
  const mystyle = {
    backgroundImage: `url(${Image})`,
  };

  return (
    <>
      <div style={mystyle}>
        <Layout />
        <Home />
      </div>
      <Services />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
};

export default Index;
