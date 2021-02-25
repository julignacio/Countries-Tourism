import styled from "styled-components";

export const StyledFilterbar = styled.div`
  display: flex;
  height: 35vh;
  justify-content: space-around;
  padding: 1rem 0;
  background-color: ${(props) =>
    props.dark ? "rgba(12,45,94,.3)" : "rgba(191,217,255,.3)"};

  * {
    color: ${(props) => (props.dark ? "#fff" : "#353535")};
  }

  input,
  select {
    color: #000;
  }

  .search {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
    width: 35%;
  }

  .searchDiv {
    display: flex;
    align-items: center;
    justify-content: center;

    .searchIcon,
    label {
      cursor: pointer;
      transition: all 250ms ease;
    }

    &:hover .searchIcon {
      transform: scale(1.3);
    }

    &:hover label {
      color: #000;
    }
  }

  .searchIcon {
    height: 2rem;
  }

  .count {
    text-align: center;
  }

  .selects {
    align-self: center;
  }
`;
