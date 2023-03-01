import React from "react";
import './calls.css'
import Header from "../common/header/Header";
import Sidebar from "../common/sidebar/SideBar";
import LeftFold from "./left-fold/LeftFold";
import RightFold from "./right-fold/RightFold";

const Calls = () => {
  return (
    <div className="calls-container">
      <Header />
      <div className="calls-body">
        <div className="calls-sidebar">
          <Sidebar />
        </div>
        <div className="calls-leftFold">
          <LeftFold />
        </div>
        <div className="calls-rightFold">
          <RightFold />
        </div>
      </div>
    </div>
  );
};

export default Calls;
