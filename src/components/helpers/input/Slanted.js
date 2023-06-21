import React from "react";
import { BsArrowUpRight } from "react-icons/bs";
import "./slanted.css"

const Slanted = ({ title, backgroundColor, color }) => {
  const titleStyle = {
    backgroundColor: backgroundColor ? backgroundColor : '',
    color: color ? color : '',
  };

  return (
    <div>
      <div className="animate" style={titleStyle}>
        <div className="title">{title}</div>
        <div className="icon" style={titleStyle}>
          <BsArrowUpRight />
        </div>
      </div>
    </div>
  );
};

export default Slanted
