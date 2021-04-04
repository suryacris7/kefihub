import React, { Component } from "react";
import Title from "./Title";
import services from "../constants/services";

export default class Services extends Component {
  render() {
    return (
      <div id="service" className="bg-grey">
        <section className="section bg-grey"></section>
        <Title title={"What we do ?"} />
        <div className="section-center services-center">{services}</div>
      </div>
    );
  }
}
