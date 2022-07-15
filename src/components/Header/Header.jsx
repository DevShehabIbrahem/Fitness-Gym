import React, { useState } from "react";
import MobileMenu from "../mobileMenu/MobileMenu";
import { useRef } from "react";
import logo from "../../assets/logo.png";
import "../../css/Header/Header.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { words } from "../../words";
import { Link } from "react-scroll";

const Header = () => {
  const [show, setShow] = useState(false);

  return (
    <div className="header" id="home">
      <img src={logo} alt="logo" />
      <span className="burger_menu" onClick={() => setShow(!show)}>
        <GiHamburgerMenu />
      </span>

      {/*Mobile Nav*/}
      <ul className="list">
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
          <Link to=" why us" spy={true} smooth={true}>
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
      {show && <MobileMenu show={show} />}
    </div>
  );
};

export default Header;
