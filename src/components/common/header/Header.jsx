import React from "react";
import "./header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="header-menu">
        <i class="fi fi-rr-layout-fluid"></i>
      </div>
      <div className="header-leftFold">
        <label className="header-label">Microsoft Teams</label>
      </div>
      <div className="header-rightFold">
        <div className="header-search">
          <i class="fi fi-rr-search"></i>
          <input type="text" placeholder="Search" />
        </div>
        <div className="header-profile">
          <div className="header-option">
            <i class="fi fi-rr-menu-dots"></i>
          </div>
          <img
            className="header-avatar"
            src="https://cdn-icons-png.flaticon.com/512/2202/2202112.png"
            alt="img not found" height={32}
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
