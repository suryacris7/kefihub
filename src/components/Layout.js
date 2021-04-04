import React, { Component } from "react";
import PageLinks from "../constants/links";
import kefilogo from "../images/kefi_logo.png";
import { FaAlignRight } from "react-icons/fa";
export default class layout extends Component {
  render() {
    return (
      <nav className="navbar">
        <div className="nav-center">
          <div className="nav-header">
            <img src={kefilogo} alt="kefihub" className="kefihub_logo" />
            <button type="button" className="toggle-btn">
              <FaAlignRight />
            </button>
          </div>

          <PageLinks styleClass="nav-links" />
        </div>
      </nav>
    );
  }
}
