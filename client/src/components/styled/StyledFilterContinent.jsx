import styled from "styled-components";

export const StyledFilterContinent = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
    padding-left: 20px;
    margin-bottom: 12px;
    cursor: pointer;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    width: 25%;

    input {
      position: absolute;
      opacity: 0;
      cursor: pointer;
      height: 0;
      width: 0;
    }
  }

  label {
      position: relative;
      margin: .2rem 0;
  }

  .checkmark {
    position: absolute;
    top: 0;
    left: -20px;
    height: 15px;
    width: 15px;
    background-color: #eee;

    &:after {
      content: "";
      position: absolute;
      display: none;
    }
  }

  .container:hover input ~ .checkmark {
    background-color: #ccc;
  }

  .container input:checked ~ .checkmark {
    background-color: #2196f3;
  }

  .container input:checked ~ .checkmark:after {
    display: block;
  }

  .container .checkmark:after {
    left: 4px;
    top: 2px;
    width: 3px;
    height: 7px;
    border: solid white;
    border-width: 0 3px 3px 0;
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
  }
`;
