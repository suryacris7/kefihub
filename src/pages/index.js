import * as React from "react";
import Services from "../components/Services";
import Contact from "../components/Contact";
import About from "../components/About";
import Projects from "../components/Projects";
import Layout from "../components/Layout";
import Home from "../components/Home";
import { StaticQuery, graphql } from "gatsby";
import Image from "../images/banner-bg.png";
export default ({ data }) => {
  const {
    site: {
      info: { title, author },
    },
  } = data;
  console.log("props : ", data);
  return (
    <>
      <div style={{ backgroundImage: `url(${Image})` }}>
        <Layout />
        <Home />
        <Services />
      </div>

      <About />
      <Projects />
      <Contact />
    </>
  );
};

export const data = graphql`
  query First {
    site {
      info: siteMetadata {
        title
        author
        description
        members
      }
    }
  }
`;
