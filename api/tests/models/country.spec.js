const { Country, conn } = require("../../src/db.js");
const { expect } = require("chai");

describe("Country model", () => {
  before(() =>
    conn.authenticate().catch((err) => {
      console.error("Unable to connect to the database:", err);
    })
  );
  describe("Validators", () => {
    beforeEach(() => Country.sync({ force: true }));
    describe("name", () => {
      it("should throw an error if name is null", (done) => {
        Country.create({
          id: "ARG",
          flag: "https://restcountries.eu/data/arg.svg",
        })
          .then(() => done(new Error("It requires a valid name")))
          .catch(() => done());
      });

      it("should throw an error if id is null", (done) => {
        Country.create({
          name: "Argentina",
          flag: "https://restcountries.eu/data/arg.svg",
        })
          .then(() => done(new Error("It requires a valid ID")))
          .catch(() => done());
      });

      it("should throw an error if flag is null", (done) => {
        Country.create({
          name: "Argentina",
          id: "ARG",
        })
          .then(() => done(new Error("It requires a valid flag")))
          .catch(() => done());
      });

      it("should work when all parameters are passed to it", () => {
        Country.create({
          name: "Argentina",
          id: "ARG",
          flag: "https://restcountries.eu/data/arg.svg",
        });
      });
    });
  });
});
