import React from "react";

import "./style.css";

const Navbar = () => {
  return (
    <div id="header" className="navbar navbar-expand-lg">
      <div id="navbar" className="container-fluid">
        <a id="name" className="nav-item" href="#mainContainer">
          Bram Gibson
        </a>
        <div id="items">
          <a id="header-item" className="nav-item" href="#portfolio">
            Portfolio
          </a>
          <a id="header-item" className="nav-item" href="#contactCon">
            Contact
          </a>
          <a id="header-item" className="nav-item" href="#resumeCon">
            Resume
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;