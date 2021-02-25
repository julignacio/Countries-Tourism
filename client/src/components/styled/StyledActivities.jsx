import styled from "styled-components";

export const StyledActivities = styled.div`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  margin: 0 auto;
  width: 95%;
  height: 40vh;
  background-color: ${(props) =>
    props.dark ? "rgba(30, 92, 128, 1)" : "rgba(208, 238, 255, 1)"};
  padding: 1rem;
  border-radius: 15px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  overflow-y: scroll;

  .noAct {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    padding: 2rem;
  }

  .activityCard {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: space-around;
    height: 45%;
    width: 25%;
    padding: 0.5rem;
    background-color: ${(props) =>
      props.dark ? "rgb(85, 138, 168)" : "rgb(152, 218, 255)"};
    border-radius: 15px;
    margin: 0.5rem;
    position: relative;
  }

  .line1,
  .line2 {
    display: flex;
    justify-content: space-around;
    align-items: center;
  }

  .season {
    display: flex;

    .seasonIcon {
      height: 30px;
    }
  }

  .difficultyDiv,
  .durationDiv {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .title {
    font-size: 1.1rem;
  }

  .difficulty,
  .duration {
    color: rgba(0, 0, 0, 0.6);
  }

  button {
    position: absolute;
    top: 0;
    right: 0;
    width: 1rem;
    height: 1rem;
    border-radius: 15px;
    border: 1px solid rgba(0, 0, 0, 0.5);
    background-color: rgba(255, 0, 0, 0.7);
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
