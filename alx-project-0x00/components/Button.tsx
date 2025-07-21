import React from "react";
import {ButtonProps} from '@/interfaces/index';

const Button: React.FC<ButtonProps> = ({ title, styles }) => {
  return (
    <button
      className={`bg-blue-600 text-white ${styles} hover:bg-blue-700 transition`}
    >
      {title}
    </button>
  );
};

export default Button;
