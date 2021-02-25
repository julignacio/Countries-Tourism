import React from "react";
import { StyledActivities } from "./styled/StyledActivities";
import summer from "../utils/img/summer.png";
import autumn from "../utils/img/autumn.png";
import winter from "../utils/img/winter.png";
import spring from "../utils/img/spring.png";
import all from "../utils/img/all.png";
import { connect } from "react-redux";
import { deleteActivity } from "../redux/actions";

function Activities({ activities, deleteActivity, country_id, dark }) {
  const handleClick = async (act_id) => {
    await deleteActivity({
      id: act_id,
      country_id,
    });
  };

  return (
    <StyledActivities dark={dark}>
      {activities && activities.length ? (
        activities.map((act) => (
          <div className="activityCard" key={act.id}>
            <button onClick={() => handleClick(act.id)}>X</button>
            <div className="line1">
              <h4 className="title">{act.name}</h4>
              <div className="season">
                <img
                  src={
                    act.season === "summer"
                      ? summer
                      : act.season === "autumn"
                      ? autumn
                      : act.season === "winter"
                      ? winter
                      : act.season === "spring"
                      ? spring
                      : all
                  }
                  alt="season icon"
                  className="seasonIcon"
                />
              </div>
            </div>
            <div className="line2">
              <div className="durationDiv">
                <h5 className="durationTitle">Duration</h5>
                <h5 className="duration">{act.duration} hours</h5>
              </div>
              <div className="difficultyDiv">
                <h5 className="difficultyTitle">Difficulty</h5>
                <h5 className="difficulty">{act.difficulty}/5</h5>
              </div>
            </div>
          </div>
        ))
      ) : (
        <div className="noAct">
          <h3>Ups! it seems that you have not activities for this country</h3>
          <h3>Try to add one!</h3>
        </div>
      )}
    </StyledActivities>
  );
}

const mapDispatchToProps = (dispatch) => ({
  deleteActivity: (payload) => dispatch(deleteActivity(payload)),
});

export default connect(null, mapDispatchToProps)(Activities);
