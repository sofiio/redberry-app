// globalStyles.js
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
* {
margin: 0;
padding: 0;
font-family: 'Montserrat', sans-serif;
box-sizing: border-box;
}
body {
background-color: #ffffff;
}
button {
border: none;
background-color: transparent;
}
`

export default GlobalStyle
