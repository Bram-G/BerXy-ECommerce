import React from "react";

import "./style.css";

const Navbar = () => {
  return (
    <div id="header">
      <div id="topBar">
        <div id="topBarItemsCenter">
          <div id="discountText">25% Off Selected Items </div>
          <div>
            |
            <a id="discountLink" href="#">
              {" "}
              Learn More
            </a>
          </div>
        </div>
        <div id="topBarItemsRight">
          <div id="settings">

            <div className="user-box">
              <div className="user-id">
                <div className="user-name">Language</div>
                <div className="dropdown-arrow"></div>
                <div className="dropdown-menu">
                  <ul>
                    <li>English</li>
                    <li>Español</li>
                    <li>Français</li>
                  </ul>
                </div>
              </div>
            </div>

            <div id="location">Location</div>
          </div>
        </div>
      </div>
      <div id="nav">
        <div id="items">
          <div className="titleItem"> 
          <a href="/home" className="titleItem"> 
            BER<div id="xMarksTheSpot">X</div>Y
          </a>
          </div> 
          <div id="navigate">
            <a className="nav-item" href="">
              NEW
            </a>
            <a className="nav-item" href="">
              COLLECTION
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
