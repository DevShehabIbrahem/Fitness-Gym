import React from "react";
import "../../css/HeroSection/Hero.css";
import { data } from "../../data/data";
import { words } from "../../words";
import Header from "../Header/Header";

import { RightSideImages } from "../../assets/Images";

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

  return (
    <div className="hero">
      <div className="hero_left">
        {/* Logo And NavBar*/}
        <Header />

        {/* The best Fitness*/}
        <div className="hero_fitness">
          <span>{best_fitness}</span>
        </div>

        {/* Headding*/}
        <div className="hero_heading">
          <span>
            <span className="stroke-text">{SHAPE}</span> <span>YOUR</span>
          </span>
          <span> {IDEAL_body}</span>
        </div>
        <p>{shape_dec}</p>

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
        <div className="heart-rate">
          <img src={RightSideImages.heart} alt="heart" />
          <span>{heart_rate}</span>
          <span>{haert_num}</span>
        </div>

        {/*hero-images*/}
        <img
          src={RightSideImages.heroImage}
          alt="heroImage"
          className="heroImage"
        />
        <img
          src={RightSideImages.ero_image_back}
          alt="ero_image_back"
          className="hero_image_back"
        />
        <div className="hero_calories">
          <img src={RightSideImages.calories} alt="" />
          <div>
            <span>{Calories}</span>
            <span>{kcal}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
