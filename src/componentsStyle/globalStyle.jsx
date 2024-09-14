import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    *,
    *::after,
    *::before {
        box-sizing: border-box;
    }

    body {
        font-family: "Montserrat", sans-serif;
        margin: 0;
        padding: 0;
    }

    @font-face {
        font-family: "Montserrat-VariableFont_wght.ttf";
        src: url(./fonst/Montserrat/Montserrat-VariableFont_wght.ttf);
    }

    ul,
    li,
    a {
        list-style-type: none;
        text-decoration: none;
        color: white;
        padding: 0;
    }
`