import React, { Component } from "react";
import Title from "./Title";
import { StaticImage } from "gatsby-plugin-image";
import about from "../constants/about";
export default class About extends Component {
  render() {
    const stack = ["Reactjs", "Flutter", "CSS"];
    return (
      <section id="about" className="section">
        <Title title={"Who we are?"} />
        <section className="about-page">
          <div className="section-center about-center">
            <StaticImage src={"../images/hero-img.png"} className="about-img" />
            <article className="about-text">
              <p>{about}</p>
              <div className="about-stack">
                {stack.map((lang, id) => (
                  <span key={id}>{lang}</span>
                ))}
              </div>
            </article>
          </div>
        </section>
      </section>
    );
  }
}
