import React from "react";
import { words } from "../../words";
import "../../css/Programs/Programs.css";
import { programsData } from "../../data/programsData";
import RightArrow from "../../assets/rightArrow.png";

const Programs = () => {
  const { EXPLORE_OUR, PROGRAMS, TO_SHAPE_YOU } = words;

  return (
    <div className="programs">
      <div className="programs_header">
        <span className="stroke-text">{EXPLORE_OUR}</span>
        <span>{PROGRAMS}</span>
        <span className="stroke-text">{TO_SHAPE_YOU}</span>
      </div>

      {/*programs*/}
      <div className="programes-box">
        {programsData.map((item) => (
          <div className="programes-content">
            {item.image}
            <h3>{item.heading}</h3>
            <p>{item.details}</p>
            <span>
              Join Now
              <span>
                <img src={RightArrow} alt="RightArrow" />
              </span>
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Programs;
