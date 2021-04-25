import React from "react";
import { FaLinkedin, FaTwitterSquare } from "react-icons/fa";

const data = [
  // {
  //   id: 1,
  //   icon: <FaFacebookSquare className="social-icon"></FaFacebookSquare>,
  //   url: "https://www.twitter.com",
  // },
  {
    id: 2,
    icon: <FaLinkedin className="social-icon"></FaLinkedin>,
    url: "https://www.linkedin.com/company/kefihub",
  },
  // {
  //   id: 3,
  //   icon: <FaDribbbleSquare className="social-icon"></FaDribbbleSquare>,
  //   url: "https://www.twitter.com",
  // },
  // {
  //   id: 4,
  //   icon: <FaBehanceSquare className="social-icon"></FaBehanceSquare>,
  //   url: "https://www.twitter.com",
  // },
  {
    id: 5,
    icon: <FaTwitterSquare className="social-icon"></FaTwitterSquare>,
    url: "https://twitter.com/KefiHub",
  },
];
const links = data.map((link) => {
  return (
    <li key={link.id}>
      <a
        href={link.url}
        className="social-link"
        target="_blank"
        rel="noreferrer"
      >
        {link.icon}
      </a>
    </li>
  );
});

export default ({ styleClass }) => {
  return (
    <ul className={`social-links ${styleClass ? styleClass : ""}`}>{links}</ul>
  );
};
