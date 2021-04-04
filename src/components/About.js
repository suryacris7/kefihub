import React, { Component } from "react";
import Title from "./Title";
import { StaticImage } from "gatsby-plugin-image";
import img from "../images/hero-img.png";
export default class About extends Component {
  render() {
    const stack = ["Reactjs", "Flutter", "CSS"];
    return (
      <div id="about" className="bg-grey">
        <section className="section bg-grey"></section>
        <Title title={"Who we are ?"} />
        <section className="about-page">
          <div className="section-center about-center">
            <StaticImage src={img} className="about-img" />
            <article className="about-text">
              <p>
                {
                  "Flutter is an open-source UI software development kit created by Google. It is used to develop applications for Android, iOS, Linux, Mac, Windows, Google Fuchsia, and the web from a single codebase. The first version of Flutter was known as codename sky and ran on the Android operating system"
                }
              </p>
              <div className="about-stack">
                {stack.map((lang, id) => (
                  <span key={id}>{lang}</span>
                ))}
              </div>
            </article>
          </div>
        </section>
      </div>
    );
  }
}
