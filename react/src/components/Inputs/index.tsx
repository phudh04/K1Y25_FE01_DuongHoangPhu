import React from "react";
import { InputProps } from "./type";
import { inputBaseStyle, labelBaseStyle } from "./style";

const Input: React.FC<InputProps> = ({ id, type = "text", placeholder, label, value, onChange, className = "" }) => {
  return (
    <div className="w-full">
      {label && <label htmlFor={id} className={labelBaseStyle}>{label}</label>}
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={`${inputBaseStyle} ${className}`}
      />
    </div>
  );
};

export default Input;
