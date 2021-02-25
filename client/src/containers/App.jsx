import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import Slider from "../components/Slider";
import { Route } from "react-router-dom";
import Navbar from "../components/Navbar";
import { connect } from "react-redux";
import { filterCountries } from "../redux/actions";
import Home from "./Home";
import CountryDetail from "./CountryDetail";
import NewActivity from "./NewActivity";
import { GlobalStyle } from "./styled/GlobalStyle";

function App({ filterCountries, dark }) {
  const history = useHistory();
  async function onSearch(param) {
    filterCountries(param);
    history.push("/home");
  }

  useEffect(() => {
    if (!window.localStorage) {
      window.localStorage.setItem("dark", false);
    }
  }, []);

  return (
    <div className="App">
      <GlobalStyle dark={dark} />
      <Navbar onSearch={onSearch} />
      <Route exact path="/" component={Slider} />
      <Route path="/home" component={Home} />
      <Route path="/detail/:id" component={CountryDetail} />
      <Route exact path="/activity" component={NewActivity} />
      <Route path="/activity/:id" component={NewActivity} />
    </div>
  );
}

const mapStateToProps = (state) => ({
  dark: state.dark,
});

const mapDispatchToProps = (dispatch) => ({
  filterCountries: (param) => dispatch(filterCountries(param)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
