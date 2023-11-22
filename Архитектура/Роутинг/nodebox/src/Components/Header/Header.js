import React from "react";
import { NavLink } from "react-router-dom";
import headerData from "./headerData";
import "./Header.css";

const Header = () => {
  return (
    <header>
      <div className="Logo">Logo</div>
      <div className="Button">
        {headerData.map((item, index) => (
          <NavLink
            key={index}
            to={item.link}
            activeClassName="active"
            className="NavLink"
          >
            {item.name}
          </NavLink>
        ))}
      </div>
    </header>
  );
};

export default Header;