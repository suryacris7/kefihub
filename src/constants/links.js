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
    text: "about",
    url: "/about/",
  },
  {
    id: 3,
    text: "service",
    url: "/projects/",
  },
  {
    id: 4,
    text: "contact",
    url: "/contact/",
  },
];

const tempLinks = data.map((link) => {
  let page = link.text;

  return (
    <li key={link.id}>
      <div
        onClick={() => {
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
// I KNOW WE CAN COMBINE IT !!!!!

export default ({ styleClass }) => {
  return (
    <ul className={`page-links ${styleClass ? styleClass : ""}`}>
      {tempLinks}
    </ul>
  );
};
