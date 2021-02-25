import styled from "styled-components";

export const StyledCountryCards = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  background-color: ${(props) =>
    props.dark ? "rgba(30, 92, 128, .4)" : "rgba(208, 238, 255, .4)"};

  .buttons {
    width: 100%;

    button {
      width: 50%;
      background-color: rgba(95, 95, 95, 0.7);
      border: none;
      color: #fff;
      transition: all 500ms ease;

      &:hover {
        background-color: rgba(95, 95, 95, 1);
      }
    }
  }
`;
