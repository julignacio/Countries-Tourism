import styled from "styled-components";

export const StyledNewActivity = styled.div`
  background-color: ${(props) =>
    props.dark ? "rgba(30, 92, 128, .5)" : "rgba(208, 238, 255, .5)"};
  margin: 2rem auto;
  width: 80%;
  height: 90%;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
  position: relative;
  padding-bottom: 4rem;
  transition: all 500ms ease;

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    transition: all 500ms ease;
  }

  form {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;

    #inputTitle,
    #selectSeason {
      width: 40%;
      margin: 1rem 0;
    }

    .country {
      display: flex;
      justify-content: center;
      width: 100%;
      input {
        width: 40%;
      }
    }

    .numbers {
      display: flex;
      justify-content: space-around;
      width: 60%;
    }

    .difficulty,
    .duration {
      display: flex;
      align-items: center;
      width: 30%;
      color: ${(props) => (props.dark ? "white" : "black")};
    }

    #inputDif,
    #inputDur {
      margin: 2rem 5px;
      width: 2rem;
    }
  }

  input,
  select {
    transition: all 250ms ease;
    border-radius: 10px;
    border: 2px solid rgba(0, 0, 0, 0.5);
    box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.25);
    padding: 0.2rem;

    &:focus {
      outline: none;
      border: 2px solid black;
    }
  }

  input[type="text"]:enabled,
  input[type="number"]:enabled {
    color: red;
  }

  .submit {
    position: absolute;
    bottom: 1rem;
    width: 5rem;
    height: 2rem;
    background-color: rgba(152, 218, 255, 0.5);
    font-weight: 500;
    color: ${(props) => (props.dark ? "white" : "black")};
    &:hover {
      background-color: rgba(152, 218, 255, 1);
      font-weight: 600;
    }

    &:disabled {
      color: gray;
      opacity: 50%;
    }
  }
`;
