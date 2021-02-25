import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { StyledSlider } from "./styled/StyledSlider";
import { images } from "../utils/images";

const Slider = ({ dark, language }) => {
  const [slide, setSlide] = useState(0);

  let slides = document.querySelectorAll(".slide");

  const showSlide = (n, op) => {
    slides.forEach((slide, i) => {
      if (i === n) {
        slide.style.display = "block";
      } else {
        slide.style.display = "none";
      }
    });
  };

  const next = () => {
    if (slide === slides.length - 1) {
      showSlide(0);
      setSlide(0);
    } else {
      showSlide(slide + 1);
      setSlide(slide + 1);
    }
  };

  const prev = () => {
    if (slide > 0) {
      showSlide(slide - 1);
      setSlide(slide - 1);
    } else {
      showSlide(slides.length - 1);
      setSlide(slides.length - 1);
    }
  };

  let countriesSpan = [];
  const findImg = (id, dark) => {
    const img = images.find((img) => img.id === id);
    const name =
      language === "en"
        ? img.nameEn
        : language === "es"
        ? img.nameEs
        : img.namePt;
    countriesSpan.push(name);
    return dark ? img.urlNight : img.urlDay;
  };

  useEffect(() => {
    slides = document.querySelectorAll(".slide");
    showSlide(slide);
  }, []);

  return (
    <StyledSlider>
      <ul className="slides">
        <li className="slide">
          <img
            src={dark ? findImg("ISL", true) : findImg("ISL", false)}
            alt="Iceland"
          />
          <span>{countriesSpan.shift()}</span>
        </li>
        <li className="slide">
          <img
            src={dark ? findImg("IRL", true) : findImg("IRL", false)}
            alt="Ireland"
          />
          <span>{countriesSpan.shift()}</span>
        </li>
        <li className="slide">
          <img
            src={dark ? findImg("MNG", true) : findImg("MNG", false)}
            alt="Mongolia"
          />
          <span>{countriesSpan.shift()}</span>
        </li>
      </ul>
      <div className="buttons">
        <div className="next" onClick={next}>
          &#10095;
        </div>
        <div className="prev" onClick={prev}>
          &#10094;
        </div>
      </div>
    </StyledSlider>
  );
};

const mapStateToProps = (state) => ({
  dark: state.dark,
  language: state.language,
});

export default connect(mapStateToProps)(Slider);
