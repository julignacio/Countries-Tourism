import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
body {
  background-color: ${(props) =>
    props.dark ? "rgba(18, 55, 77, .8)" : "rgba(47, 146, 204, .5)"};
}
`;
