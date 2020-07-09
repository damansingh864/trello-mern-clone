import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  *, *:after, *:before {
    box-sizing: border-box;
  }

  html {
    height: 100%;
  }

  body {
    height: 100%;
    padding: 0;
    margin: 0;
  }

  #root {
    height: 100%;
  }
`

export default GlobalStyle