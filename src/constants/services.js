import React from "react";
import { FaCode, FaWindows, FaAndroid } from "react-icons/fa";

const services = [
  {
    id: 1,
    icon: <FaCode className="service-icon" />,
    title: "web development",
    text: `We develop Web application using modern tech stack which makes development faster and facilitate efficient performance.`,
    stack: ["ReactJS", "Flutter", "AngularJS"],
  },

  {
    id: 2,
    icon: <FaAndroid className="service-icon" />,
    title: "app development",
    text: `Willing to  get your application designed with best user interface ? We develop cross platform Mobile application with seamless and effortless user experiences. `,
    stack: ["Flutter", "React Native"],
  },
  {
    id: 3,
    icon: <FaWindows className="service-icon" />,
    title: "desktop application",
    text: `Is the desktop apps slowly dying ? No we don't think so. We develop Desktop application for Windows, Mac OS using Flutter a google UI toolkit to leverage more native features of the device. `,
    stack: ["Flutter"],
  },
];

export default services.map((service) => {
  const { id, icon, title, text, stack } = service;
  //let printStack = _getStack(stack);

  return (
    <article key={id} className="service">
      {icon} <h4>{title}</h4>
      <div className="underline"></div>
      <p>{text}</p>
      <div className="about-stack">
        {stack.map((lang, id) => (
          <span key={id}>{lang}</span>
        ))}
      </div>
    </article>
  );
});
