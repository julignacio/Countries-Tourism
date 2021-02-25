import styled from "styled-components";

export const StyledCountryDetail = styled.div`
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

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  .secondary {
    font-weight: 500;
    color: rgba(0, 0, 0, 0.5);
    margin-bottom: 1rem;
  }

  .subtitle {
    margin-bottom: 1rem;
  }

  .div1 {
    padding: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 25vh;
    margin-bottom: 1.5rem;

    .flag {
      height: 100%;
      margin: 0 2rem;
      img {
        height: 100%;
        border-radius: 10px;
      }
    }
  }

  .div2 {
    width: 70%;
    display: flex;
    justify-content: space-around;
    text-align: center;
    margin-bottom: 2rem;
    .title {
      margin-bottom: 1rem;
    }

    .subtitle {
      color: rgba(0, 0, 0, 0.75);
    }
  }

  .div3 {
    width: 75%;
    display: flex;
    justify-content: space-around;
    margin-bottom: 0.5rem;
    input {
      padding: 3px;
      border-radius: 10px;
      border: 1px solid rgba(0, 0, 0, 0.5);
      box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
    }
    .minDur,
    .maxDur,
    .minDif,
    .maxDif {
      width: 2.3rem;
    }
  }

  .link {
    position: absolute;
    bottom: 1rem;
    right: 1rem;
    color: black;
    text-decoration: none;
    background-color: ${(props) =>
      props.dark ? "rgba(28, 90, 126, .7)" : "rgba(152, 218, 255, .7)"};
    padding: 0.5rem;
    border-radius: 10px;
    transition: all 250ms ease;

    &:hover {
      background-color: ${(props) =>
        props.dark ? "rgba(28, 90, 126, 1)" : "rgba(152, 218, 255, 1)"};
      font-weight: 500;
    }
  }
`;
