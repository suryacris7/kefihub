import React from "react";
import PageLinks from "../constants/links";
import kefilogo from "../images/kefiLogo.png";
import { FaAlignRight } from "react-icons/fa";

const Navbar = ({ toggleSidebar }) => {
  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <img src={kefilogo} alt="kefihub" className="kefihub_logo" />
          <button type="button" className="toggle-btn" onClick={toggleSidebar}>
            <FaAlignRight />
          </button>
        </div>

        <PageLinks styleClass="nav-links" removeDrawer={toggleSidebar} />
      </div>
    </nav>
  );
};

export default Navbar;
