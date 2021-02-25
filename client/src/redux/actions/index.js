import axios from "axios";

export const GET_COUNTRIES = "GET_COUNTRIES";
export const FILTER_COUNTRIES = "FILTER_COUNTRIES";
export const GET_COUNTRY_DETAIL = "GET_COUNTRY_DETAIL";
export const ADD_ACTIVITY = "ADD_ACTIVITY";
export const SWITCH_MODE = "SWITCH_MODE";
export const CHANGE_LANGUAGE = "CHANGE_LANGUAGE";
export const SET_SHOWED = "SET_SHOWED";

export const getCountries = () => async (dispatch) => {
  const countries = await axios.get(
    "https://pi-countries.herokuapp.com/countries"
  );
  dispatch({ type: GET_COUNTRIES, payload: countries.data });
  return countries.data;
};

export const setShowed = (payload) => ({
  type: SET_SHOWED,
  payload,
});

export const nextPage = (current) => async (dispatch) => {
  const countries = await axios.get(
    "https://pi-countries.herokuapp.com/countries?page=" + (current + 1)
  );
  dispatch({ type: GET_COUNTRIES, payload: countries.data });
  return countries.data;
};

export const previousPage = (current) => async (dispatch) => {
  const countries = await axios.get(
    "https://pi-countries.herokuapp.com/countries?page=" + (current - 1)
  );
  dispatch({ type: GET_COUNTRIES, payload: countries.data });
  return countries.data;
};

export const filterCountries = (payload) => async (dispatch) => {
  const countries = await axios.get(
    `https://pi-countries.herokuapp.com/countries?name=${payload}`
  );
  dispatch({ type: FILTER_COUNTRIES, payload: countries.data });
};

export const getCountryDetail = (payload) => async (dispatch) => {
  const country = await axios.get(
    `https://pi-countries.herokuapp.com/countries/${payload}`
  );
  dispatch({ type: GET_COUNTRY_DETAIL, payload: country.data });
};

export const addActivity = (payload) => async () => {
  await axios.post("https://pi-countries.herokuapp.com/activity", payload);
};

export const deleteActivity = (payload) => async () => {
  await axios.delete("https://pi-countries.herokuapp.com/activity", {
    data: payload,
  });
};

export const switchMode = () => ({
  type: SWITCH_MODE,
});

export const changeLanguage = (payload) => ({
  type: CHANGE_LANGUAGE,
  payload,
});
