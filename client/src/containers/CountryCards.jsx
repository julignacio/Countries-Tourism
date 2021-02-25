import React from "react";
import { connect } from "react-redux";
import CountryCard from "../components/CountryCard";
import { StyledCountryCards } from "./styled/StyledCountryCards";

const CountryCards = ({ countries, handlePrev, handleNext, dark }) => {
  return (
    <StyledCountryCards dark={dark}>
      {countries &&
        countries.map((country) => (
          <CountryCard country={country} key={country.id} />
        ))}
      <div className="buttons">
        <button onClick={handlePrev}>Previous</button>
        <button onClick={handleNext}>Next</button>
      </div>
    </StyledCountryCards>
  );
};

const mapStateToProps = (state) => ({
  dark: state.dark,
  countries: state.showed,
});

export default connect(mapStateToProps)(CountryCards);
