import React from "react";
import "./button.css";

const Button = ({
  label,
  disable = true,
  onClick,
  backgroundColor,
  textColor,
}) => {
  return (
    <div className="button_wrapper">
      <button className="button" onClick={onClick} disabled={disable}>
        {label}
      </button>
    </div>
  );
};

export default Button;
