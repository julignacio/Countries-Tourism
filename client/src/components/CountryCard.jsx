import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { StyledCountryCard } from "./styled/StyledCountryCard";

const CountryCard = ({ country, dark }) => {
  return (
    <StyledCountryCard dark={dark}>
      <Link to={`/detail/${country.id}`} className="link">
        <div className="img" alt="flag">
          <img src={country.flag} />
        </div>
        <div className="info">
          <h4>{country.name}</h4>
          <h6>{country.id}</h6>
          <h5>{country.continent}</h5>
        </div>
      </Link>
    </StyledCountryCard>
  );
};

const mapStateToProps = (state) => ({
  dark: state.dark,
});

export default connect(mapStateToProps)(CountryCard);
