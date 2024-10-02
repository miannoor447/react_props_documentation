import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";
import styles from "./SubMenu.module.css";
import { useSelector } from "react-redux";
import { ExpandLess, ExpandMore } from "@mui/icons-material";

const SidebarLabel = styled("span")(({ theme }) => ({
  position: "relative",
  top: "-3px",
}));

const SubMenu = ({ item, onItemClick }) => {
  const navigate=useNavigate();
  
  const [subnav, setSubnav] = useState(false);


  const handleClick = (title, componentId) => {
    onItemClick(title, componentId); 
    navigate(item.path);
    
  };

  const showSubnav = () => setSubnav(!subnav);

  return (
    <div>
      <div
        onClick={() => handleClick(item.title, item.ComponentId)}
        className={`${window.location.pathname.replace(/%20/g, '') === item.path ? styles.sidebarLinkActive : ""}`}
      >
<div style={{ display: 'flex', alignItems: 'center' }}>
  {item.icon && 
    React.cloneElement(item.icon, { 
      fontSize: 'large',
      sx: { color: item?.icon?.props?.sx?.color??"" } // Use the color directly from iconMapping
    })
  }
  <SidebarLabel className="ml-5 mt-2">{item.title}</SidebarLabel>
</div>
        <div onClick={showSubnav}>
          {item.subNav && subnav ? <ExpandLess /> : item.subNav ? <ExpandMore /> : null}
        </div>
      </div>
      {subnav && item.subNav && item.subNav.map((subItem, index) => (
        <div
          key={index}
          onClick={() => handleClick(subItem.title, subItem.ComponentId)}
          className={`${styles.sidebarLink2} ${window.location.pathname === subItem.path ? styles.sidebarLinkActive2 : ""}`}
        >
          {subItem.icon}
          <span className={styles.subNavTitle}>{subItem.title}</span>
        </div>
      ))}
    </div>
  );
};

export default SubMenu;
