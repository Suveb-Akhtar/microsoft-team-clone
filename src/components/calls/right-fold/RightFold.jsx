import React from "react";
import { CallsConatct } from "../../../data/calls";
import ContactCard from "./ContactCard";
import "./rightFold.css";

const RightFold = () => {
  const contacts = CallsConatct;
  return (
    <div className="rightFold">
      <div className="rightFold-heading">
        <label className="heading-label">Contact</label>
      </div>
      <div className="rightFold-option">
        <div className="contact-search">
          <input placeholder="Find a contact" />
          <div className="contact-search-icon">
            <i class="fi fi-rr-search"></i>
          </div>
        </div>
        <div className="add-button">
        <div className="add-icon">
        <i class="fi fi-rr-user-add"></i>
        </div>
        <label className="add-label"> Add Contact</label>

        </div>
      </div>
      <div className="contact-list">
        {contacts.map((item)=>{
          return <ContactCard item ={item}/>
        })}
      </div>
    </div>
  );
};

export default RightFold;
