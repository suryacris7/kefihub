import React, { Component } from "react";
import Title from "./Title";
import services from "../constants/services";

export default class Contact extends Component {
  render() {
    return (
      <div id="contact">
        <section className="section bg-grey"></section>
        <Title title={"Contact us !"} />
      </div>
    );
  }
}
