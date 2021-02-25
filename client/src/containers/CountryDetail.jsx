import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Activities from "../components/Activities";
import { addActivity, getCountryDetail } from "../redux/actions";
import { StyledCountryDetail } from "./styled/StyledCountryDetail";

const CountryDetail = ({ getCountryDetail, match, countryDetail, dark }) => {
  const { params } = match;

  useEffect(() => {
    async function getDetails() {
      await getCountryDetail(params.id);
    }
    getDetails();
  });

  return (
    <StyledCountryDetail dark={dark}>
      <div className="div1">
        <div className="region">
          <h5 className="subtitle">
            {countryDetail && countryDetail.continent}
          </h5>
          <h5 className="secondary">
            {countryDetail && countryDetail.subRegion}
          </h5>
        </div>
        <div className="flag">
          <img src={countryDetail && countryDetail.flag} alt="flag" />
        </div>
        <div className="name">
          <h4 className="title">{countryDetail && countryDetail.name}</h4>
          <h5 className="secondary">{countryDetail && countryDetail.id}</h5>
          <h5 className="subtitle">{countryDetail && countryDetail.capital}</h5>
        </div>
      </div>
      <div className="div2">
        <div className="area">
          <h4 className="title">Area</h4>
          <h5 className="subtitle">{countryDetail && countryDetail.area}</h5>
        </div>
        <div className="population">
          <h4 className="title">Population</h4>
          <h5 className="subtitle">
            {countryDetail && countryDetail.population}
          </h5>
        </div>
      </div>
      <div className="div3">
        <h3>Activities</h3>
      </div>
      <Activities
        activities={countryDetail && countryDetail.activities}
        country_id={countryDetail && countryDetail.id}
        dark={dark}
      />
      <Link
        to={`/activity/${countryDetail && countryDetail.id}`}
        className="link"
      >
        Add Activity
      </Link>
    </StyledCountryDetail>
  );
};

const mapStateToProps = (state) => ({
  countryDetail: state.countryDetail,
  dark: state.dark,
});

const mapDispatchToProps = (dispatch) => ({
  getCountryDetail: (id) => dispatch(getCountryDetail(id)),
  addActivity: (payload) => dispatch(addActivity(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CountryDetail);
