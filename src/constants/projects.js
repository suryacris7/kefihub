import React from "react";
import { StaticImage } from "gatsby-plugin-image";

const projects = [
  {
    id: 1,
    name: "ReactJS",
    desc:
      "React is an open-source, front end, JavaScript library for building user interfaces or UI components. It is maintained by Facebook and a community of individual developers and companies. React can be used as a base in the development of single-page or mobile applications",
    image: (
      <StaticImage
        src={"../images/2.jpg"}
        className="project-img"
        alt="loading..."
      ></StaticImage>
    ),
  },
  {
    id: 2,
    name: "Flutter",
    desc:
      "Flutter is an open-source UI software development kit created by Google. It is used to develop applications for Android, iOS, Linux, Mac, Windows, Google Fuchsia, and the web from a single codebase. The first version of Flutter was known as codename sky and ran on the Android operating system",
    image: (
      <StaticImage
        src={"../images/1.jpg"}
        className="project-img"
        alt="loading..."
      ></StaticImage>
    ),
  },
];

export default projects;
