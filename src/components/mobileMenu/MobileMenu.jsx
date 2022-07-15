import React from "react";
import "../../css/mobileMenu/MobileMenu.css";
import { Link } from "react-scroll";
const MobileMenu = ({ show }) => {
  return (
    <ul className={show ? "showMenu" : "hideMenu"}>
      <li>
        <Link to="home" spy={true} smooth={true}>
          Home
        </Link>
      </li>
      <li>
        <Link to="programs" spy={true} smooth={true}>
          Programs
        </Link>
      </li>
      <li>
        <Link to="why us" spy={true} smooth={true}>
          Why Us
        </Link>
      </li>
      <li>
        <Link to="plans" spy={true} smooth={true}>
          Plans
        </Link>
      </li>
      <li>
        <Link to="testimonilas" spy={true} smooth={true}>
          Testimonilas
        </Link>
      </li>
    </ul>
  );
};

export default MobileMenu;
