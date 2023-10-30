import React from "react";
import "./Button.css";

const Button = ({ onClick, color }) => {
  return (
    <div className="button" style={{ backgroundColor: color }} onClick={onClick}>
    </div>
  );
};

export default Button;
