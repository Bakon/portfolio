import { createGlobalStyle } from 'styled-components';
import { colors } from './css-util';

const lightTheme: { [key: string]: string } = {
    background: colors.white,
    color: colors.black,
};

const darkTheme: { [key: string]: string } = {
    background: colors.dark,
    color: colors.white,
};

const Stylesheet = createGlobalStyle`
    * {
        box-sizing: border-box;
    }

    body {
        margin: 0;
        font-size: 18px;
        font-family: 'Roboto', 'Arial', sans-serif;
        background-color: var(--bg);
    }

    body.light {
        --bg: ${lightTheme.background};
        --header: ${lightTheme.color};
        --text: ${lightTheme.color};
        --link: ${lightTheme.color};
    }

    body.dark {
        -webkit-font-smoothing: antialiased;
        --bg: ${darkTheme.background};
        --header: ${darkTheme.color};
        --text: ${darkTheme.color};
        --link: ${darkTheme.color};
    }
`;

export default Stylesheet;
