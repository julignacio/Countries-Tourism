import React from "react";
import { StyledActivityFilter } from "./styled/StyledActivityFilter";

export default function ActivityFilter({ margin, setMargin }) {
  const handleChange = (e) => {
    if (Number(e.target.value) < 0) {
      return setMargin({ ...margin, [e.target.name]: 0 });
    }
    if (e.target.name === "difMax" || e.target.name === "difMin") {
      if (Number(e.target.value) > 5) {
        return;
      }
    }
    setMargin({ ...margin, [e.target.name]: e.target.value });
  };

  return (
    <StyledActivityFilter>
      <input type="text" placeholder="Activity name" className="actName" />
      <select name="season" className="selectAct" defaultValue="All">
        <option value="">All</option>
        <option value="Summer">Summer</option>
        <option value="Spring">Spring</option>
        <option value="Winter">Winter</option>
        <option value="Autumn">Autumn</option>
      </select>
      <div className="minMax">
        <div className="dif">
          <input
            type="number"
            placeholder="min"
            name="difMin"
            value={margin.difMin}
            onChange={(e) => handleChange(e)}
          />
          <label>{"< Difficulty >"}</label>
          <input
            type="number"
            placeholder="max"
            name="difMax"
            value={margin.difMax}
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div className="dur">
          <input
            type="number"
            placeholder="min"
            name="durMin"
            value={margin.durMin}
            onChange={(e) => handleChange(e)}
          />
          <label>{"< Duration >"}</label>
          <input
            type="number"
            placeholder="max"
            name="durMax"
            value={margin.durMax}
            onChange={(e) => handleChange(e)}
          />
        </div>
      </div>
    </StyledActivityFilter>
  );
}
