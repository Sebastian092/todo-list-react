import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
html {
  box-sizing: border-box;
}

*,
::after, ::before {
  box-sizing: inherit;
}

body {
  background: #e5e3e3;
  font-family: 'Lato', sans-serif;
}
`