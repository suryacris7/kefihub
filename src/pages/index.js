import * as React from "react";
import Example from "../components/example";
import Header from "../components/Header/Header";
import Explore from "../components/Explore";
import Services from "../components/Services";
import Contact from "../components/Contact";
import About from "../components/About";
import Layout from "../components/Layout";
import { StaticQuery, graphql } from "gatsby";
export default ({ data }) => {
  const {
    site: {
      info: { title, author },
    },
  } = data;
  console.log("props : ", data);
  return (
    <div id="home">
      <Layout />
      <Explore />
      <About />
      <Services />
      <Contact />
    </div>
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
