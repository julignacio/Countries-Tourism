const { DataTypes: D } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define("activity", {
    name: {
      type: D.STRING,
      allowNull: false,
    },
    difficulty: {
      type: D.INTEGER,
      validate: {
        min: 1,
        max: 5,
      },
    },
    duration: {
      type: D.INTEGER,
    },
    season: {
      type: D.ENUM(["summer", "spring", "autumn", "winter", "all"]),
    },
  });
};
