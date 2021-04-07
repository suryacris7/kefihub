import React from "react";
import { StaticImage } from "gatsby-plugin-image";

const projects = [
  {
    id: 1,
    name: "Reactjs",
    desc:
      "Flutter is an open-source UI software development kit created by Google. It is used to develop applications for Android, iOS, Linux, Mac, Windows, Google Fuchsia, and the web from a single codebase. The first version of Flutter was known as codename sky and ran on the Android operating system",
    image: (
      <StaticImage
        src={"../images/projects-1.jpg"}
        className="project-img"
        alt="loading..."
      ></StaticImage>
    ),
    stack: ["React", "Redux"],
  },
  {
    id: 2,
    name: "Flutter",
    desc:
      "Flutter is an open-source UI software development kit created by Google. It is used to develop applications for Android, iOS, Linux, Mac, Windows, Google Fuchsia, and the web from a single codebase. The first version of Flutter was known as codename sky and ran on the Android operating system",
    image: (
      <StaticImage
        src={"../images/projects-1.jpg"}
        className="project-img"
        alt="loading..."
      ></StaticImage>
    ),
    stack: ["Dart", "Firebase"],
  },
];

export default projects;
