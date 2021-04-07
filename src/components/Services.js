import React, { Component } from "react";
import Title from "./Title";
import services from "../constants/services";

export default class Services extends Component {
  render() {
    return (
      <section id="services" className="section bg-grey">
        <Title title={"What we do?"} />
        <div className="section-center services-center">{services}</div>
      </section>
    );
  }
}
