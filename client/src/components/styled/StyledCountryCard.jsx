import styled from "styled-components";

export const StyledCountryCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 1rem 1rem;
  width: 194px;
  height: 224px;
  background-color: ${(props) =>
    props.dark ? "rgba(30, 92, 128, .2)" : "rgba(208, 238, 255, .2)"};
  box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;

  .link {
    text-decoration: none;
    color: black;
    transition: all 250ms ease;
    height: 100%;

    &:hover {
      transform: scale(1.1);
    }

    &:hover h6 {
      color: rgba(0, 0, 0, 0.5);
    }
  }

  .img {
    width: 100%;
    height: 60%;
  }

  img {
    margin: 1rem;
    width: 80%;
    border-radius: 10px;
  }

  .info {
    display: flex;
    flex-direction: column;
    align-items: center;
    * {
      margin: 0.5rem;
      padding: 0;
      box-sizing: border-box;
    }

    h4 {
      margin-bottom: 2px;
    }

    h6 {
      margin-top: 0;
      margin-bottom: 0.2rem;
      color: rgba(0, 0, 0, 0.25);
      transition: all 500ms ease;
    }

    h5 {
      color: rgba(0, 0, 0, 0.75);
      font-weight: 500;
    }
  }
`;
