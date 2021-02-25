const { Router } = require("express");
const bodyParser = require("body-parser");
const { Country, Activity } = require("../db.js");

const router = Router();

router.use(bodyParser.json());

router.post("/", async (req, res) => {
  const { name, difficulty, duration, season, country_id } = req.body;
  if (!name || !difficulty || !duration || !season || !country_id) {
    return res.sendStatus(400);
  }
  const activity = await Activity.create({
    name,
    difficulty,
    duration,
    season,
  });
  const country = await Country.findByPk(country_id);
  if (country && activity) {
    await country.addActivity(activity);
    return res.status(200).json(activity);
  }
  return res.sendStatus(404);
});

router.delete("/", async (req, res) => {
  const { id, country_id } = req.body;
  if (!id || !country_id) return res.sendStatus(400);
  const activity = await Activity.findByPk(id);
  const country = await Country.findByPk(country_id);
  if (!country || !activity) return res.sendStatus(404);
  await country.removeActivity(activity);
  return res.sendStatus(200);
});

module.exports = router;
