import React, { Component } from "react";
import SocialLink from "../constants/socialLinks";
import scrollTo from "gatsby-plugin-smoothscroll";
export default class Explore extends Component {
  render() {
    return (
      <section className="section explore" id="home">
        <h2>{"THE BEST WAY TO PREDICT"}</h2>
        <br />
        <h2>{"THE FUTURE IS TO"}</h2>
        <br />
        <h2>{"CREATE IT"}</h2>
        <br />

        <div className="social-link-div">
          <SocialLink className="social-links" />
        </div>
      </section>
    );
  }
}
