import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    html {
        box-sizing: border-box;
    }
    
    *,
    *::before,
    *::after {
        box-sizing: inherit;
    }
    
    body {
        margin: 0;
        padding: 120px 65px 0;
        font-family: 'Montserrat', Arial, sans-serif;
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

