import React, { Component } from "react";
import "./Navigation.css";
import { NavLink } from "react-router-dom";

class Navigation extends Component {
  state = {
    tabs: [
      {
        name: "Calendar",
        path: "/"
      },
      {
        name: "Editor",
        path: "/editor"
      },
      {
        name: "Employees",
        path: "/employees"
      }
    ]
  };

  render() {
    const tabs = this.state.tabs.map(tab => (
      <li key={tab.name}>
        <NavLink exact to={tab.path} key={tab.name}>
          {tab.name}
        </NavLink>
      </li>
    ));
    return (
      <nav className="Navigation">
        <ul>{tabs}</ul>
      </nav>
    );
  }
}

export default Navigation;
