import {
  GET_COUNTRIES,
  FILTER_COUNTRIES,
  GET_COUNTRY_DETAIL,
  SWITCH_MODE,
  CHANGE_LANGUAGE,
  SET_SHOWED,
} from "../actions";

const initialState = {
  countries: [],
  showed: [],
  countryDetail: null,
  activities: [],
  dark: false,
  language: "en",
  allLanguages: ["en", "es", "pt"],
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_COUNTRIES:
      return { ...state, countries: payload };

    case SET_SHOWED:
      return { ...state, showed: payload };

    case FILTER_COUNTRIES:
      return { ...state, showed: payload };

    case GET_COUNTRY_DETAIL:
      return { ...state, countryDetail: payload };

    case SWITCH_MODE:
      return { ...state, dark: !state.dark };

    case CHANGE_LANGUAGE:
      return {
        ...state,
        language: state.allLanguages.includes(payload) ? payload : "en",
      };

    default:
      return state;
  }
};
