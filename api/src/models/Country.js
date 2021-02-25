const { DataTypes: D } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define("country", {
    id: {
      type: D.STRING(3),
      primaryKey: true,
      allowNull: false,
      unique: true,
    },
    name: {
      type: D.STRING(100),
      allowNull: false,
    },
    flag: {
      type: D.STRING(37),
      isUrl: true,
      allowNull: false,
    },
    continent: {
      type: D.ENUM([
        "Africa",
        "Americas",
        "Asia",
        "Europe",
        "Oceania",
        "Polar",
        "",
      ]),
    },
    subRegion: {
      type: D.STRING(30),
    },
    capital: {
      type: D.STRING(50),
    },
    area: {
      type: D.INTEGER,
    },
    population: {
      type: D.INTEGER,
    },
  });
};

// id: 'VAT', STRING
// name: 'Holy See', STRING
// flag: 'https://restcountries.eu/data/vat.svg', STRING URL
// continent: 'Europe', ENUM Europe
// subregion: 'Southern Europe', STRING
// capital: 'Rome', STRING
// area: 0.44, INTEGER
// population: 451 INTEGER
