import React, { Component } from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
export default class Layout extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false,
    };
  }

  toggleSidebar = () => {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  };
  render() {
    return (
      <>
        <Navbar toggleSidebar={this.toggleSidebar} />
        <Sidebar
          toggleSidebar={this.toggleSidebar}
          isOpen={this.state.isOpen}
        />
      </>
    );
  }
}
