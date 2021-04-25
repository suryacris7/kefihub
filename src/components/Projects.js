import React, { Component } from "react";
import Title from "./Title";
import Project from "./Project";
import projects from "../constants/projects";
export default class Projects extends Component {
  render() {
    return (
      <section id="projects" className="section projects">
        <Title title={"Technologies We Use :)"} />
        <div className="section-center project-center">
          {projects.map((project) => (
            <Project {...project} />
          ))}
        </div>
      </section>
    );
  }
}
