// Icon.js
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Icon.css';

const Icon = ({ icon, size = '1x', className = '', bgColor }) => {
    return (
        <FontAwesomeIcon 
            icon={icon} 
            size={size} 
            className={`icon flex justify-center align-item-center ${className}`} // Fixed className usage
            style={{ margin: '0 5px', backgroundColor: bgColor }} // Optional: add some margin around the icon
        />
    );
};

export default Icon;
