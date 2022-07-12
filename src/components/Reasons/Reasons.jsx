import React from "react";
import { RightSideImages } from "../../assets/Images";
import "../../css/Reasons/Reasons.css";
import { chooseUs } from "../../data/chooseUs";
import { words } from "../../words";

const Reasons = () => {
  const { imag1, imag2, imag3, imag4, nb, adidas, nike } = RightSideImages;
  const { CHOOSE_Us, SOME_REASONS, WHY } = words;

  return (
    <div className="Reasons" id="reasons">
      {/*Reasons_left*/}
      <div className="Reasons_left">
        {/*Grid images*/}
        <img src={imag1} alt="fitness" />
        <img src={imag2} alt="fitness" />
        <img src={imag3} alt="fitness" />
        <img src={imag4} alt="fitness" />
      </div>

      {/*Reasons_right*/}
      <div className="Reasons_right">
        <span>{SOME_REASONS}</span>
        <h1>
          <span className="stroke-text">{WHY}</span>
          {CHOOSE_Us}
        </h1>

        {/*checkPoint*/}
        {chooseUs.map(({ imgaeURL, dec }) => (
          <div className="Reasons_tick">
            <img src={imgaeURL} alt="" />
            <h3>{dec}</h3>
          </div>
        ))}

        {/*LogoSection*/}
        <div className="Reasons_logos">
          <span>OUR PARTNERS</span>
          <div className="logos">
            <img src={nb} alt="fitness" />
            <img src={adidas} alt="fitness" />
            <img src={nike} alt="fitness" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reasons;
