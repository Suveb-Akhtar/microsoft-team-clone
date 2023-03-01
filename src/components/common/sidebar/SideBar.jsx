import React from "react";
import { SidebarBottom, SidebarData, SidebarMore } from "../../../data/sidebar";
import "./sidebar.css";
import SideBarOption from "./sideBarOption";

const Sidebar = () => {
  const topOption = SidebarData;
  const more = SidebarMore;
  const bottomOption = SidebarBottom;

  return (
    <div className="sidebar">
      <div className="sidebar-top">
        <div>
          {topOption.map((option) => {
            return (
              <SideBarOption
                option={option}
                isActive={option.name === "Calls" ? true : false}
              />
            );
          })}
        </div>
        <div>
          <SideBarOption option={more}/>
        </div>
      </div>
      <div className="sidebar-bottom">
        {bottomOption.map((option) => {
           return <SideBarOption option={option}/>
        })}
      </div>
    </div>
  );
};

export default Sidebar;
