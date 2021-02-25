/* eslint-disable import/no-extraneous-dependencies */
const { expect } = require("chai");
const session = require("supertest-session");
const app = require("../../src/app.js");
const { Country, conn } = require("../../src/db.js");

const agent = session(app);
const country = {
  name: "Argentina",
  id: "ARG",
  flag: "https://restcountries.eu/data/arg.svg",
};

describe("Country routes", () => {
  before(() =>
    conn.authenticate().catch((err) => {
      console.error("Unable to connect to the database:", err);
    })
  );
  beforeEach(() =>
    Country.sync({ force: true }).then(() => Country.create(country))
  );
  describe("GET /countries", () => {
    it("should get 200", () => agent.get("/countries").expect(200));

    it("should get 200 if you search for a valid query", () =>
      agent.get("/countries?name=Argentina").expect(200));

    it("should get 200 if you search for a valid id /countries/:countryID", () =>
      agent.get("/countries/ARG").expect(200));
  });
});
