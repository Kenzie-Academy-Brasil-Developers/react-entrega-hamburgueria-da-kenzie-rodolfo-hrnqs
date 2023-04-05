import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root{
        --color-primary: #27AE60;
        --color-primary-50: #93D7AF;
        --color-secondary: #EB5757;
        --grey-100: #333333;
        --grey-50: #828282;
        --grey-20: #E0E0E0;
        --grey-0: #F5F5F5;
        --feedback-negative: #E60000;
        --feedback-warning: #FFCD07;
        --feedback-sucess: #168821;
        --feedback-info: #155BCB;
    }

    body{
        font-family: 'Inter', sans-serif;
    }
`