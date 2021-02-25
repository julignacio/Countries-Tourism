import styled from "styled-components";

export const StyledNavbar = styled.nav`
  height: 7vh;
  display: flex;
  align-items: center;
  background-color: ${(props) =>
    props.dark ? "rgba(12,45,94, .8)" : "rgba(191,217,255, .8)"};
  justify-content: space-between;

  .menuIcon,
  .language,
  .mode {
    height: 80%;
    margin: 0.5rem;
  }

  .mode {
    margin-right: 1rem;
  }

  .language {
    height: 70%;
  }

  .search {
    justify-self: center;
    border-radius: 5px;
    border: 1px solid black;
    box-shadow: 1px 1px 0 black;
    padding: 0.2rem;

    &:focus {
      outline: none;
    }
  }

  .extra-icons {
    height: 100%;
    display: inherit;
    align-items: center;
  }

  .modal,
  .modalMenu {
    display: none;
    transition: all 250ms ease;
    opacity: 0;
    z-index: 3;
    background-color: rgba(0, 0, 0, 0.5);
    border-radius: 5px;
    border: 2px solid black;
    box-shadow: 1px 1px 0 black;

    ul {
      list-style: none;
      padding: 0 1rem;

      li {
        color: #fff;
        font-weight: 500;
        cursor: pointer;

        &:hover {
          font-weight: 750;
        }
      }
    }
  }

  .modal {
    position: absolute;
    top: 7vh;
    right: 3.5rem;
  }

  .modalMenu {
    position: absolute;
    top: 7vh;
    left: 1rem;
  }

  .link {
    text-decoration: none;
    color: #c9c9c9;
  }

  .active {
    color: #fff;
    font-weight: 750;
    font-size: 1.1rem;
  }
`;
