import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import CountryCards from "./CountryCards";
import Filterbar from "./Filterbar";
import {
  getCountries,
  nextPage,
  previousPage,
  setShowed,
} from "../redux/actions";

const Home = ({
  getCountries,
  countries,
  previousPage,
  nextPage,
  setShowed,
  showed,
}) => {
  const [current, setCurrent] = useState(1);
  const [filters, setFilters] = useState({
    continents: [],
    activities: {
      filter: false,
    },
    orderBy: "name",
    order: "asc",
  });

  const filter = async (toShow, obj = filters) => {
    if (obj.continents.length) {
      toShow = toShow.filter((country) =>
        obj.continents.includes(country.continent)
      );
    }
    if (obj.activities.filter) {
      toShow = toShow.filter((country) => {
        const found = country.activities.find((act) => {
          try {
            if (obj.activities.name) {
              if (
                !act.name
                  .toLowerCase()
                  .includes(obj.activities.name.toLowerCase())
              )
                throw new Error("name");
            }
            if (obj.activities.minDur) {
              if (!(act.duration >= obj.activities.minDur))
                throw new Error("minDur");
            }
            if (obj.activities.maxDur) {
              if (!(act.duration <= obj.activities.maxDur)) {
                throw new Error("maxDur");
              }
            }
            if (obj.activities.minDif) {
              if (!(act.difficulty >= obj.activities.minDif))
                throw new Error("minDif");
            }
            if (obj.activities.maxDif) {
              if (!(act.difficulty <= obj.activities.maxDif))
                throw new Error("maxDif");
            }
            if (obj.activities.season !== "all") {
              if (!(act.season === obj.activities.season))
                throw new Error("season");
            }
            return true;
          } catch (err) {
            return false;
          }
        });
        return !!found;
      });
    }
    return toShow;
  };

  const sort = (toShow, obj = filters) => {
    toShow = toShow.sort((a, b) => {
      if (a[obj.orderBy] > b[obj.orderBy]) return obj.order === "asc" ? -1 : 1;
      if (a[obj.orderBy] < b[obj.orderBy]) return obj.order === "asc" ? 1 : -1;
      return 0;
    });
    setShowed(toShow);
  };

  const onSearch = async (obj) => {
    setCurrent(1);
    let toShow = await getCountries();
    toShow = await filter(toShow, obj);
    sort(toShow, obj);
    setShowed(toShow);
  };

  const handlePrev = async () => {
    if (current === 1) return;
    let toShow = await previousPage(current);
    setCurrent(current - 1);
    toShow = await filter(toShow);
    await setShowed(toShow);
  };

  const handleNext = async () => {
    if (current === 25) return;
    let toShow = await nextPage(current);
    setCurrent(current + 1);
    toShow = await filter(toShow);
    await setShowed(toShow);
  };

  useEffect(() => {
    onSearch({
      continents: [],
      activities: {
        filter: false,
      },
      orderBy: "name",
      order: "asc",
    });
  }, []);

  return (
    <div>
      <Filterbar
        onSearch={onSearch}
        showedCountries={showed}
        setFilters={setFilters}
      />
      <CountryCards handlePrev={handlePrev} handleNext={handleNext} />
    </div>
  );
};

const mapStateToProps = (state) => ({
  countries: state.countries,
  showed: state.showed,
});

const mapDispatchToProps = (dispatch) => ({
  getCountries: () => dispatch(getCountries()),
  previousPage: (current) => dispatch(previousPage(current)),
  nextPage: (current) => dispatch(nextPage(current)),
  setShowed: (payload) => dispatch(setShowed(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
