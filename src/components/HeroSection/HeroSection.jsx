import React from "react";
import "../../css/HeroSection/Hero.css";
import { data } from "../../data/data";
import { words } from "../../words";
import Header from "../Header/Header";

import { RightSideImages } from "../../assets/Images";
import { motion } from "framer-motion";

const HeroSection = () => {
  const {
    btn_join,
    heart_rate,
    haert_num,
    best_fitness,
    SHAPE,
    IDEAL_body,
    shape_dec,
    startedbtn,
    learnmore,
    Calories,
    kcal,
  } = words;

  const transition = { type: "spring", duration: 3 };
  return (
    <div className="hero">
      <div className="blur hero-blur"></div>
      <div className="hero_left">
        {/* Logo And NavBar*/}
        <Header />

        {/* The best Fitness*/}
        <div className="hero_fitness">
          <motion.div
            initial={{ left: "238px" }}
            whileInView={{ left: "8px" }}
            transition={{ ...transition, type: "tween" }}
          ></motion.div>
          <span>{best_fitness}</span>
        </div>

        {/* Headding*/}
        <div className="hero_heading">
          <span>
            <span className="stroke-text">{SHAPE}</span> <span>YOUR</span>
          </span>
          <span> {IDEAL_body}</span>
          <p>{shape_dec}</p>
        </div>

        {/*figures*/}
        <div className="figures">
          {data.map(({ num, dec }) => (
            <div>
              <span>{num}</span>
              <span>{dec}</span>
            </div>
          ))}
        </div>

        {/*buttons*/}
        <div className="buttons">
          <button type="sumbit">{startedbtn}</button>
          <button type="sumbit">{learnmore}</button>
        </div>
      </div>
      <div className="hero_right">
        <button>{btn_join}</button>

        {/*heart-Rate*/}
        <motion.div
          initial={{ right: "-3rem" }}
          whileInView={{ right: "3rem" }}
          transition={transition}
          className="heart-rate"
        >
          <img src={RightSideImages.heart} alt="heart" />
          <span>{heart_rate}</span>
          <span>{haert_num}</span>
        </motion.div>

        {/*hero-images*/}
        <img
          src={RightSideImages.heroImage}
          alt="heroImage"
          className="heroImage"
        />

        <motion.img
          initial={{ right: "12rem" }}
          whileInView={{ right: "20rem" }}
          transition={transition}
          src={RightSideImages.ero_image_back}
          alt="hero_image_back"
          className="hero_image_back"
        />

        <motion.div
          initial={{ right: "15rem" }}
          whileInView={{ right: "35rem" }}
          transition={transition}
          className="hero_calories"
        >
          <img src={RightSideImages.calories} alt="" />
          <div>
            <span>{Calories}</span>
            <span>{kcal}</span>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default HeroSection;
