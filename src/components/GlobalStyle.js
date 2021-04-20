import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Roboto', sans-serif;
        color: #424242;
    }

    body{
        background: #ffffff;
        overflow-x: hidden;
    }

    html{
        @media (max-width: 1700px){
            font-size: 75%;
        }
    }
`;

export default GlobalStyle;
