import React from "react";
import PageLinks from "../constants/links";
import SocialLinks from "../constants/socialLinks";
import { FaTimes } from "react-icons/fa";
const Sidebar = ({ isOpen, toggleSidebar }) => {
  return (
    <aside className={`sidebar ${isOpen ? "show-sidebar" : ""}`}>
      <button className="close-btn" onClick={toggleSidebar}>
        <FaTimes />
      </button>
      <div className="side-container">
        <PageLinks styleClass="sidebar-links" removeDrawer={toggleSidebar} />
        <SocialLinks styleClass="sidebar-icons" />
      </div>
    </aside>
  );
};

export default Sidebar;
