import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

 
* {
  margin: 0;
  padding: 0;
  -webkit-box-sizing: border-box;
          box-sizing: border-box;
}

*:before,
*:after {
  -webkit-box-sizing: border-box;
          box-sizing: border-box;
}

a,
a:visited {
  text-decoration: none;
  font-family: normal;
  cursor: pointer;
}

button,
._btn {
  cursor: pointer;
}

ul li {
  list-style: none;
}

@font-face {
    font-family: 'Roboto';
    src: local('Roboto'),
    url('./font/Roboto-Regular.ttf') format('truetype');
    font-weight: 400;
    font-style: normal;
}

html,
body {
  width: 100%;
  height: 100%;
  font-family: normal;
}

div,
button,
a {
  font-family: normal;
}

`;

export const wrapper = styled.div`
  width: 100%;
  min-height: 100%;
  overflow: hidden;
`;
