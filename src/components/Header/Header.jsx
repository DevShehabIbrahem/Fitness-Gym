import React from "react";
import logo from "../../assets/logo.png";
import "../../css/Header/Header.css";
import { words } from "../../words";

const Header = () => {
  const { Nav } = words;

  return (
    <div className="header">
      <img src={logo} alt="logo" />
      <ul>
        {Nav.map((item, idx) => (
          <li key={idx}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default Header;
