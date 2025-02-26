import React from "react";
import { ButtonProps } from "./type";
import { buttonBaseStyle, buttonHoverStyle, buttonDisabledStyle } from "./styles";

const Button: React.FC<ButtonProps> = ({ type = "button", onClick, className = "", children, disabled = false }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${buttonBaseStyle} ${!disabled ? buttonHoverStyle : buttonDisabledStyle} ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
