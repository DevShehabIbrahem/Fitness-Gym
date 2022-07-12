import React from "react";
import { plansData } from "../../data/plansData";
import arrow from "../../assets/rightArrow.png";
import "../../css/Plans/Plans.css";

const Plans = () => {
  return (
    <div>
      <div className="programes-box">
        {plansData.map(({ features, name, price, icon }) => (
          <div className="programes-content">
            {icon}
            <h3>{name}</h3>
            <span>{price}</span>
            <p>{features[0]}</p>
            <p>{features[1]}</p>
            <p>{features[2]}</p>

            <span>
              Join Now
              <span>
                <img src={arrow} alt="RightArrow" />
              </span>
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Plans;
