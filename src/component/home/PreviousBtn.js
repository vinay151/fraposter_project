import React from "react";
import './banner.css';
const PreviousBtn = (props) => {
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <props.icon style={{ color: "#994d47", fontSize: "30px" }} />
    </div>
  );
};

export default PreviousBtn;
