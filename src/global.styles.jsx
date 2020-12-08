import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
body {
  font-family: 'Open Sans Condensed', sans-serif;
  max-width: 1000px;
  margin: 0 auto;

}

a {
  text-decoration: none;
  color: inherit;
}

* {
  box-sizing: border-box;
}

.error {
  color: red;
  font-weight: 700;
  margin: 1rem 0;
}
`;
