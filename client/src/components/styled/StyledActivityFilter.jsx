import styled from "styled-components";

export const StyledActivityFilter = styled.div`
  width: 25%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  input,
  select {
    border: 1px solid rgba(50, 50, 50, 0.25);
    box-shadow: 1px 1px 2px gray;
    border-radius: 10px;
    padding: 0.1rem;
  }

  .minMax {
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    .dif,
    .dur {
      display: flex;
      justify-content: center;
      margin: 0.5rem 0;
    }

    input {
      width: 3rem;

      &:hover {
        outline: none;
      }
    }
  }
`;
