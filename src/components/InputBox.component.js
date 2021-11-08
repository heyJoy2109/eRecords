import React from "react";
import "./input.css";

const InputBox = ({
  label,
  value,
  type = "text",
  onChange,
  onchange,
  labelColor,
  defaultValue,
}) => {
  return (
    <div className="input-wrapper">
      <label className="custom-label">{label}</label>
      <input onChange={onChange} type={type} value={value} />
    </div>
  );
};

export default InputBox;
