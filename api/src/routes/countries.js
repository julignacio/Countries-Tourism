const { default: axios } = require("axios");
const { Router } = require("express");
const { Country, Activity } = require("../db.js");
const { Op } = require("sequelize");

const router = Router();

router.use(async (req, res, next) => {
  const count = await Country.count();
  if (!count) {
    const countriesApi = await axios.get(
      "https://restcountries.eu/rest/v2/all"
    );
    const countriesArray = countriesApi.data.map((country) => ({
      id: country.alpha3Code,
      name: country.name,
      flag: country.flag,
      continent: country.region,
      subRegion: country.subregion,
      capital: country.capital,
      area: country.area,
      population: country.population,
    }));
    await Country.bulkCreate(countriesArray);
  }
  next();
});

router.get("/", async (req, res) => {
  let countries;
  let { name } = req.query;
  if (name) {
    name = name
      .split(" ")
      .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
      .join(" ");
    countries = await Country.findAll({
      where: {
        name: {
          [Op.like]: `%${name}%`,
        },
      },
      include: { model: Activity, required: false },
    });
    return countries ? res.json(countries) : res.sendStatus(404);
  }
  countries = await Country.findAll({
    attributes: ["id", "name", "flag", "continent", "population"],
    offset: req.query.page > 0 ? (req.query.page - 1) * 10 : 0,
    limit: 10,
    include: { model: Activity, required: false },
  });
  return res.json(countries);
});

router.get("/:countryId", async (req, res) => {
  const country = await Country.findOne({
    where: { id: req.params.countryId },
    attributes: [
      "id",
      "name",
      "flag",
      "continent",
      "capital",
      "subRegion",
      "area",
      "population",
    ],
    include: { model: Activity, required: false },
  });
  res.json(country);
});

router.get("/random", async (req, res) => {
  const country = await Country.findAll({
    attributes: ["id"],
    order: Sequelize.literal("rand()"),
    limit: 1,
  });
  res.json(country.id);
});

module.exports = router;
