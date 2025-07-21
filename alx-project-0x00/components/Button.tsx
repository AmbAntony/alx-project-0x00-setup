import React from "react";
import {ButtonProps} from '@/interfaces/index';

const sizeClasses = {
    small: 'text-sm px-3 py-1',
    medium: 'text-base px-4 py-2',
    large: 'text-lg px-6 py-3',
};

const Button: React.FC<ButtonProps> = ({
    title,
    size = 'medium',
    shape = 'rounded-md',
    className = '',
}) => {
    return (
        <button 
         className={`bg-blue-600 text-white ${sizeClasses[size]} ${shape} ${className} hover:bg-blue-700 transition`}
        >
            {title}
        </button>
    )
}

export default Button;