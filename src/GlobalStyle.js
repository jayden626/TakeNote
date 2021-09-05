import { createGlobalStyle } from 'styled-components';

import img from './images/cork.jpg';

export const GlobalStyle = createGlobalStyle`
    :root{
        --maxWidth: 1440px;
        --white: #fff;
        --lightGrey: #eee;
        --medGrey: #353535;
        --darkGrey: #1c1c1c;
        --lightYellow:#ffffc6;
        --medYellow:#ffff91;
        --fontSuperBig: 2rem;
        --fontBig: 1.5rem;
        --fontMed: 1.2rem;
        --fontSmall: 1rem;
    }

    * {
        box-sizing: border-box;
        font-family: 'Abel', san-serif;
    }

    body {
        background: url(${img});
        width: 100%;
        height: auto;
        margin: 0;
        padding: 0;

        h1 {
            font-size: 2rem;
            font-weight: 600;
            color: var(--white);
        }

        h2 {
            font-size: 1.5rem;
            font-weight: 600;
        }

        p {
            font-size: 1rem;
            color: var(--white);
        }
    }
`;
