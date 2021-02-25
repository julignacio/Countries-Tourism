import React from "react";
import { NavLink } from "react-router-dom";
import { StyledNavbar } from "./styled/StyledNavbar";
import menu from "../utils/img/menuIcon.png";
import sun from "../utils/img/sun.png";
import moon from "../utils/img/moon.png";
import languageIcon from "../utils/img/language.png";
import { connect } from "react-redux";
import { changeLanguage, switchMode } from "../redux/actions";

const Navbar = ({
  dark,
  allLanguages,
  changeMode,
  changeLanguage,
  language,
  onSearch,
}) => {
  const handleClick = (option) => {
    const modal = document.querySelector(option);
    if (modal.style.display === "none" || !modal.style.display) {
      modal.style.display = "block";
      modal.style.opacity = "100%";
    } else {
      modal.style.display = "none";
      modal.style.opacity = "0";
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const value = document.querySelector(".search").value;
    document.querySelector(".search").value = "";
    onSearch(value);
  };

  return (
    <StyledNavbar dark={dark}>
      <img
        src={menu}
        alt="Hamburguer Menu"
        className="menuIcon"
        onClick={() => handleClick(".modalMenu")}
      />
      <div className="modalMenu">
        <ul>
          <li>
            <NavLink exact to="/" className="link" activeClassName="active">
              {language === "en"
                ? "Homepage"
                : language === "es"
                ? "Inicio"
                : "Principal"}
            </NavLink>
          </li>
          <li>
            <NavLink exact to="/home" className="link" activeClassName="active">
              {language === "en"
                ? "Show All Countries"
                : language === "es"
                ? "Mostrar Países"
                : "Mostrar Países"}
            </NavLink>
          </li>
          <li>
            <NavLink
              exact
              to="/activity"
              className="link"
              activeClassName="active"
            >
              {language === "en"
                ? "Add Activity"
                : language === "es"
                ? "Agregar Actividad"
                : "Adicionar Atividade"}
            </NavLink>
          </li>
        </ul>
      </div>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input
          placeholder={
            language === "en"
              ? "Search..."
              : language === "es"
              ? "Buscar..."
              : "Procurar..."
          }
          className="search"
        />
      </form>
      <div className="extra-icons">
        <img
          src={languageIcon}
          alt="Switch Language"
          className="language"
          onClick={() => handleClick(".modal")}
        />
        <img
          src={!dark ? moon : sun}
          alt="Switch Mode"
          className="mode"
          onClick={changeMode}
        />
        <div className="modal">
          <ul>
            {allLanguages &&
              allLanguages.map((lng) => (
                <li
                  onClick={() => {
                    changeLanguage(lng);
                    handleClick(".modal");
                  }}
                  key={lng}
                >
                  {lng}
                </li>
              ))}
          </ul>
        </div>
      </div>
    </StyledNavbar>
  );
};

const mapStateToProps = (state) => ({
  dark: state.dark,
  allLanguages: state.allLanguages,
  language: state.language,
});

const mapDispatchToProps = (dispatch) => ({
  changeMode: () => dispatch(switchMode()),
  changeLanguage: (language) => dispatch(changeLanguage(language)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
