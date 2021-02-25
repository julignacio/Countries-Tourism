import React, { useState } from "react";
import { connect } from "react-redux";
import FilterContinent from "../components/FilterContinent";
import { StyledFilterbar } from "./styled/StyledFilterbar";
import search from "../utils/img/search.png";
import ActivityFilter from "../components/ActivityFilter";

const Filterbar = ({
  language,
  showedCountries,
  onSearch,
  setFilters,
  dark,
}) => {
  const [continents, setContinents] = useState([]);

  const [margin, setMargin] = useState({
    difMin: 0,
    difMax: 5,
    durMin: 0,
    durMax: Infinity,
  });

  const [season, setSeason] = useState("all");

  const handleCheck = (e) => {
    if (continents.includes(e.target.name)) {
      setContinents(continents.filter((cont) => cont !== e.target.name));
    } else {
      setContinents([...continents, e.target.name]);
    }
  };

  const handleSearch = async () => {
    const bool =
      document.querySelector(".actName").value ||
      (margin.durMin && margin.durMin !== 0) ||
      (margin.durMax && margin.durMax !== Infinity) ||
      (margin.difMin && margin.difMin !== 0) ||
      (margin.difMax && margin.difMax !== 5) ||
      document.querySelector(".selectAct").value;
    const obj = {
      continents,
      activities: {
        name: document.querySelector(".actName").value,
        minDur: margin.durMin || 0,
        maxDur: margin.durMax || Infinity,
        minDif: margin.difMin || 0,
        maxDif: margin.difMax || 5,
        season:
          document.querySelector(".selectAct").value.toLowerCase() || "all",
        filter: bool,
      },
      orderBy: document.querySelector(".selectProp").value,
      order: document.querySelector(".selectOrder").value,
    };
    await setFilters(obj);
    onSearch(obj);
  };

  return (
    <StyledFilterbar dark={dark}>
      <FilterContinent
        handleCheck={handleCheck}
        language={language}
        continents={continents}
        setContinents={setContinents}
      />
      <div className="search">
        <div className="searchDiv" onClick={handleSearch}>
          <img src={search} alt="Seach icon" className="searchIcon" />
          <label>
            {language === "en"
              ? "Search"
              : language === "es"
              ? "Buscar"
              : "Procurar"}
          </label>
        </div>

        <div className="count">
          <h3>
            {language === "es"
              ? `Se cargaron ${
                  showedCountries && showedCountries.length
                } paises`
              : language === "pt"
              ? `${
                  showedCountries && showedCountries.length
                } países foram carregados`
              : `${
                  showedCountries && showedCountries.length
                } countries were loaded`}
          </h3>
        </div>

        <div className="selects">
          <label>{language === "en" ? "Order by:" : "Ordenar por:"}</label>
          <select name="prop" className="selectProp">
            <option value="name">
              {language === "en"
                ? "name"
                : language === "es"
                ? "nombre"
                : "nome"}
            </option>
            <option value="population">
              {language === "en"
                ? "population"
                : language === "es"
                ? "poblacion"
                : "população"}
            </option>
          </select>
          <label>
            {language === "en"
              ? "in order:"
              : language === "es"
              ? "en orden:"
              : "em ordem:"}
          </label>
          <select name="order" className="selectOrder">
            <option value="asc">asc</option>
            <option value="desc">{language === "pt" ? "dec" : "desc"}</option>
          </select>
        </div>
      </div>
      <ActivityFilter
        margin={margin}
        setMargin={setMargin}
        setSeason={setSeason}
      />
    </StyledFilterbar>
  );
};

const mapStateToProps = (state) => ({
  language: state.language,
  countries: state.countries,
  dark: state.dark,
});

export default connect(mapStateToProps)(Filterbar);
