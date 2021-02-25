import React from "react";
import { StyledFilterContinent } from "./styled/StyledFilterContinent";

export default function FilterContinent({ handleCheck, language }) {
  return (
    <StyledFilterContinent>
      <label className="container">
        {language === "en" ? "Africa" : "África"}
        <input type="checkbox" name="Africa" onClick={(e) => handleCheck(e)} />
        <span className="checkmark"></span>
      </label>

      <label className="container">
        {language === "en" ? "Americas" : "Américas"}
        <input
          type="checkbox"
          name="Americas"
          onClick={(e) => handleCheck(e)}
        />
        <span className="checkmark"></span>
      </label>

      <label className="container">
        {language === "en" ? "Asia" : "Ásia"}
        <input type="checkbox" name="Asia" onClick={(e) => handleCheck(e)} />
        <span className="checkmark"></span>
      </label>

      <label className="container">
        {language === "en" ? "Europe" : "Europa"}
        <input type="checkbox" name="Europe" onClick={(e) => handleCheck(e)} />
        <span className="checkmark"></span>
      </label>

      <label className="container">
        {language === "en"
          ? "Oceania"
          : language === "pt"
          ? "Oceânia"
          : "Oceania"}
        <input type="checkbox" name="Oceania" onClick={(e) => handleCheck(e)} />
        <span className="checkmark"></span>
      </label>

      <label className="container">
        Polar
        <input type="checkbox" name="Polar" onClick={(e) => handleCheck(e)} />
        <span className="checkmark"></span>
      </label>

      <label className="container">
        {language === "en"
          ? "Without Continent"
          : language === "pt"
          ? "Nenhum Continente"
          : "Sin Continente"}
        <input type="checkbox" name="" onClick={(e) => handleCheck(e)} />
        <span className="checkmark"></span>
      </label>
    </StyledFilterContinent>
  );
}
