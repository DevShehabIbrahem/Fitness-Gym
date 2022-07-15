import { useState } from "react";
import "../../css/testImonials/testImonials.css";
import { testimonialsData } from "../../data/testimonialsData";
import leftArrow from "../../assets/leftArrow.png";
import rightArrow from "../../assets/rightArrow.png";
import { words } from "../../words";
import { motion } from "framer-motion";

const TestImonials = () => {
  const transition = { type: "spring", duration: 3 };

  const { TESTIMONIALS, WHAT_THEY, SAY_ABOUT_US } = words;
  const [state, setState] = useState(0);

  const TestimonailsNumb = (num) => {
    setState(state + 1);
    if (num === 2) setState(0);
  };
  return (
    <div className="testImonials" id="testimonilas">
      <div className="testImonials_left">
        {/*testImonials_left*/}
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
        {/*bg-images-border& fill div*/}
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
        ></motion.div>

        <motion.div
          initial={{ opacity: 0, x: 100 }}
          transition={{ ...transition, duration: 2 }}
          whileInView={{ opacity: 1, x: 0 }}
        ></motion.div>

        <motion.img
          key={state}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ ...transition, duration: 2 }}
          src={testimonialsData[state].image}
          alt="slide"
          className="testImonials_slide"
        />

        {/*testImonials_arrows*/}
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
