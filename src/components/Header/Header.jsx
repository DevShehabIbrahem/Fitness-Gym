import React, { useState } from "react";
import MobileMenu from "../mobileMenu/MobileMenu";
import logo from "../../assets/logo.png";
import "../../css/Header/Header.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { words } from "../../words";

const Header = () => {
  const { Nav } = words;
  const [show, setShow] = useState(false);
  return (
    <div className="header">
      <img src={logo} alt="logo" />
      <span className="burger_menu" onClick={() => setShow(!show)}>
        <GiHamburgerMenu />
      </span>

      {/*Mobile Nav*/}
      <ul className="list">
        {Nav.map((item, idx) => (
          <li key={idx}>{item}</li>
        ))}
      </ul>
      {show && <MobileMenu show={show} />}
    </div>
  );
};

export default Header;
