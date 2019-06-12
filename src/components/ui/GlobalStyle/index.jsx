import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  /* Fonts */
  @import url('https://fonts.googleapis.com/css?family=Asap|Open+Sans');
  @import url('https://fonts.googleapis.com/css?family=Oswald');

  * {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    font-family: Asap, sans-serif;
    color: ${({ theme }) => theme.colors.darkGray};
    background-color: ${({ theme }) => theme.colors.lightGray};
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin: 0;
    font-family: Oswald, sans-serif;
  }
`

export default GlobalStyle
