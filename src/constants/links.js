import React from "react";
import { Link } from "gatsby";
import scrollTo from "gatsby-plugin-smoothscroll";

const data = [
  {
    id: 1,
    text: "home",
    url: "/",
  },
  {
    id: 2,
    text: "services",
    url: "/services/",
  },
  {
    id: 3,
    text: "about",
    url: "/about/",
  },
  {
    id: 4,
    text: "projects",
    url: "/projects/",
  },
  {
    id: 5,
    text: "contact",
    url: "/contact/",
  },
];

const tempLinks = (removeDrawer) => {
  var links = data.map((link) => {
    let page = link.text;

    return (
      <li key={link.id}>
        <div
          onClick={() => {
            removeDrawer(false);
            console.log("Page : ", page);
            return scrollTo(`#${page}`);
          }}
          to={link.url}
        >
          {link.text}
        </div>
      </li>
    );
  });

  return links;
};
// I KNOW WE CAN COMBINE IT !!!!!

export default ({ styleClass, removeDrawer }) => {
  console.log("Rem : ", styleClass, "--", removeDrawer);
  return (
    <ul className={`page-links ${styleClass ? styleClass : ""}`}>
      {tempLinks(removeDrawer)}
    </ul>
  );
};
