import React from "react";
import { plansData } from "../../data/plansData";
import arrow from "../../assets/rightArrow.png";
import "../../css/Plans/Plans.css";
import whiteTick from "../../assets/whiteTick.png";
import { words } from "../../words";

const Plans = () => {
  const { READY_TO_START, YOUR_JOURNEY, NOW_WITHUS } = words;
  return (
    <div>
      <div className="plans_head" id="plans">
        <span className="stroke-text">{READY_TO_START}</span>
        <span>{YOUR_JOURNEY}</span>
        <span className="stroke-text">{NOW_WITHUS}</span>
      </div>

      {/*bulr*/}
      <div className="blur hero-blur-left"></div>
      <div className="blur hero-blur-right"></div>

      {/*features*/}
      <div className="plans-box">
        {plansData.map(({ features, name, price, icon }) => (
          <div className="plans-content" key={name}>
            <span>{icon}</span>
            <h3>{name}</h3>
            <span>${price}</span>
            <p>
              <img src={whiteTick} alt="" />
              {features[0]}
            </p>
            <p>
              <img src={whiteTick} alt="" />
              {features[1]}
            </p>
            <p>
              <img src={whiteTick} alt="" />
              {features[2]}
            </p>
            <span>
              See more benefits
              <span>
                <img src={arrow} alt="RightArrow" />
              </span>
            </span>
            <button>Join Now</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Plans;
