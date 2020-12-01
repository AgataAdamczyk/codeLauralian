import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    html {
        box-sizing: border-box;
        font-size: 62.5%;  /* 1rem = 10px */
    }
    
    *,
    *::before,
    *::after {
        box-sizing: inherit;
    }
    
    body {
        margin: 0;
        padding: 120px 0 0 0;
        font-size: 1.6rem;
        font-family: 'Montserrat', Arial, sans-serif;
        overflow-x: hidden;
    }
    
    button {
        padding: 0;
        cursor: pointer;
        font-family: 'Montserrat', Arial, sans-serif;
    }
    
    ul {
        padding: 0;
        margin: 0;
    }
`;

export default GlobalStyle;

