// iconListItem.js

import React from "react";
import PropTypes from "prop-types";
import Icon from "../Icon/Icon"; // Adjust the path as necessary
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Box from "../Box/Box";

const IconListItem = ({ icon, title, description, href, className }) => {
  return (
    <div className={`${className} icon-list-item flex text-left`} href={href}>
      <Icon
        icon={icon}
        size="sm"
        className="styled-icon dynamic-border-effect hover-scale"
      />
      <div className="icon-list-item-content smaller-left-space flex column top-space">
      <h3>{title}</h3>
      <p className="p-small smaller-top-space">{description}</p>
      </div>
    </div>
  );
};

export default IconListItem;
