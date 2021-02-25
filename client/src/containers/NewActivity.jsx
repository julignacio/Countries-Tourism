import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";
import { addActivity } from "../redux/actions";
import { StyledNewActivity } from "./styled/StyledNewActivity";

const NewActivity = ({ countryDetail, addActivity, match, language, dark }) => {
  const history = useHistory();
  const [input, setInput] = useState({
    name: "",
    difficulty: "",
    duration: "",
    season: "all",
    country_id: match.params.id || "",
  });

  const handleChange = (e) => {
    e.target.style.color = !e.target.value ? "red" : "black";
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      !input.name ||
      !input.difficulty ||
      !input.duration ||
      !input.country_id
    ) {
      alert("Please enter valid data");
      return;
    }
    const countriesArray = input.country_id.split(",");
    while (countriesArray.length) {
      const newOne = {
        name: input.name,
        difficulty: input.difficulty,
        duration: input.duration,
        season: input.season,
        country_id: countriesArray.shift().trim(),
      };
      await addActivity(newOne);
    }
    history.push(match.params.id ? `/detail/${match.params.id}` : "/home");
  };

  const checkErrors = () => {
    const boolean =
      !!input.name &&
      !!input.difficulty &&
      !!input.duration &&
      !!input.country_id;
    return !boolean;
  };

  return (
    <StyledNewActivity dark={dark}>
      <h2>Add New Activity</h2>
      <span></span>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input
          type="text"
          placeholder={
            language === "en"
              ? "Activity title..."
              : language === "es"
              ? "Titulo de Actividad"
              : "Título de atividade"
          }
          name="name"
          value={input.title}
          onChange={handleChange}
          id="inputTitle"
        />
        <select
          name="season"
          id="selectSeason"
          defaultValue="all"
          onChange={handleChange}
        >
          <option value="summer">
            {language === "en"
              ? "Summer"
              : language === "es"
              ? "Verano"
              : "Verão"}
          </option>
          <option value="spring">
            {language === "en" ? "Spring" : "Primavera"}
          </option>
          <option value="winter">
            {language === "en"
              ? "Winter"
              : language === "es"
              ? "Invierno"
              : "Inverno"}
          </option>
          <option value="autumn">
            {language === "en"
              ? "Autumn"
              : language === "es"
              ? "Otoño"
              : "Outono"}
          </option>
          <option value="all">
            {language === "en"
              ? "All Seasons"
              : language === "es"
              ? "Todas las Estaciones"
              : "Todas as Temporadas"}
          </option>
        </select>
        <div className="country">
          <input
            type="text"
            placeholder={
              language === "en"
                ? "Countries ID (separate with comma)"
                : language === "es"
                ? "ID de Países (separados por coma)"
                : "IDs de País (separados por vírgulas)"
            }
            name="country_id"
            value={input.country_id}
            onChange={handleChange}
            id="country_id"
            disabled={!!match.params.id}
          />
        </div>
        <div className="numbers">
          <div className="difficulty">
            <h4>
              {language === "en"
                ? "Difficulty:"
                : language === "es"
                ? "Dificultad:"
                : "Dificuldade:"}
            </h4>
            <input
              type="number"
              placeholder="0"
              name="difficulty"
              value={input.difficulty}
              onChange={handleChange}
              id="inputDif"
            />
            <label>/5</label>
          </div>
          <div className="duration">
            <h4>
              {language === "en"
                ? "Duration:"
                : language === "es"
                ? "Duración:"
                : "Duração:"}
            </h4>
            <input
              type="number"
              placeholder="0"
              name="duration"
              value={input.duration}
              onChange={handleChange}
              id="inputDur"
            />
            <label>Hours</label>
          </div>
        </div>
        <input
          type="submit"
          className="submit"
          value={
            language === "en"
              ? "Add"
              : language === "es"
              ? "Agregar"
              : "Adicionar"
          }
          disabled={checkErrors()}
        />
      </form>
    </StyledNewActivity>
  );
};

const mapStateToProps = (state) => ({
  countryDetail: state.countryDetail,
  language: state.language,
  dark: state.dark,
});

const mapDispatchToProps = (dispatch) => ({
  addActivity: (payload) => dispatch(addActivity(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(NewActivity);
