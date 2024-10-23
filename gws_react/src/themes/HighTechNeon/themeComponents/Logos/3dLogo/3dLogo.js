// 3dLogo.js
import React from "react";
import "./3d-logo.css";
import { useTheme } from "../../../themeControls/ThemeContext"; // Import the ThemeContext

const light3dLogo = `${process.env.PUBLIC_URL}/mylogo3d.png`;
const dark3dLogo = `${process.env.PUBLIC_URL}/mylogo3d-black.png`;

const Logo = ({
  width,
  classname = "",
  ContainerClassName = "",
  onClick,
  responsive = false,
}) => {
  const { isLightMode } = useTheme(); // Use the theme context to determine the mode

  // Dynamically calculate height based on width (set a ratio, e.g., height = 0.9 * width)
  const calculatedHeight = `${parseFloat(width) * 1.15}px`;

  return (
    <div
      className={`flex justify-center item-align-center ${ContainerClassName}`}
    >
      {/* Conditionally apply the dark or light mode logo based on the theme */}
      <img
        src={isLightMode ? dark3dLogo : dark3dLogo}
        // src={darkLogo}
        alt={isLightMode ? "Light Mode Logo" : "Dark Mode Logo"}
        onClick={onClick}
        className={`${classname} ${responsive ? "responsive-logo" : ""}`}
        style={{
          height: responsive ? "auto" : calculatedHeight,
          width: responsive ? "100%" : width,
        }}
      />
    </div>
  );
};

export default Logo;
