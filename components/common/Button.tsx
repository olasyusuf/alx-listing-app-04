import React from 'react';
import { ButtonProps } from "@/interfaces";

const Button: React.FC<ButtonProps> = ({ children, onClick, className = '' }) => {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 font-semibold rounded-lg shadow-md transition-colors duration-200 ease-in-out ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;