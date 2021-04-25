import React from "react";

const Project = ({ id, name, desc, image }) => {
  return (
    <article key={id} className="project">
      {image}
      <div className="project-info">
        <span className="project-number">0{id}</span>
        <h3>{name}</h3>
        <p className="project-desc">{desc}</p>
      </div>
    </article>
  );
};

export default Project;
