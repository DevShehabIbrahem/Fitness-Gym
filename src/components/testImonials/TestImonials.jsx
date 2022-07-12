import { useState } from "react";
import "../../css/testImonials/testImonials.css";
import { testimonialsData } from "../../data/testimonialsData";
import leftArrow from "../../assets/leftArrow.png";
import rightArrow from "../../assets/rightArrow.png";
import { words } from "../../words";

const TestImonials = () => {
  const { TESTIMONIALS, WHAT_THEY, SAY_ABOUT_US } = words;
  const [state, setState] = useState(0);

  const TestimonailsNumb = (num) => {
    setState(state + 1);
    if (num === 2) setState(0);
  };
  return (
    <div className="testImonials">
      <div className="testImonials_left">
        {/*testImonials_Header*/}
        <span>{TESTIMONIALS}</span>
        <h3 className="stroke-text">{WHAT_THEY}</h3>
        <span>{SAY_ABOUT_US}</span>
        <div className="reveiw">
          <p>{testimonialsData[state].review}</p>
          <div className="testImonials_coatch">
            <span>{testimonialsData[state].name}</span>-
            <span>{testimonialsData[state].status}</span>
          </div>
        </div>
      </div>
      <div className="testImonials_right">
        <div></div>
        <div></div>
        <img
          src={testimonialsData[state].image}
          alt=""
          className="testImonials_slide"
        />
        <div className="testImonials_arrows">
          <img
            src={leftArrow}
            alt="leftArrow"
            onClick={() => TestimonailsNumb(state)}
          />
          <img
            src={rightArrow}
            alt="rightArrow"
            onClick={() => TestimonailsNumb(state)}
          />
        </div>
      </div>
    </div>
  );
};

export default TestImonials;
