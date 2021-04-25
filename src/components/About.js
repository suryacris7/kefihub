import React, { Component } from "react";
import Title from "./Title";
import { StaticImage } from "gatsby-plugin-image";
import { about } from "../constants/about";
import { vision } from "../constants/about";
export default class About extends Component {
  render() {
    return (
      <section id="about" className="section">
        <Title title={"Who we are?"} />
        <section className="about-page">
          <div className="section-center about-center">
            <StaticImage
              src={"../images/projects-1.jpg"}
              className="about-img"
              alt="loading..."
            ></StaticImage>
            <article className="about-text">
              <p>{about}</p>
              <br />
              <p>{vision}</p>
            </article>
          </div>
        </section>
      </section>
    );
  }
}
