import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

    * {
        margin: 0;
        padding: 0;
    }

    body {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        background-color: #F8F9FA;
    }
    .site-content {
        min-height: 100vh;
    }
`
