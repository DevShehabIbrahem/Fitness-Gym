import React from "react";
import { words } from "../../words";
import "../../css/mobileMenu/MobileMenu.css";
const MobileMenu = ({ show }) => {
  const { Nav } = words;

  return (
    <ul className={show ? "showMenu" : "hideMenu"}>
      {Nav.map((item) => (
        <a href="##" key={item} className="text-[18px]">
          <li>{item}</li>
        </a>
      ))}
    </ul>
  );
};

export default MobileMenu;
