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

        &.light {
            --bg: ${lightTheme.background};
            --header: ${lightTheme.color};
            --text: ${lightTheme.color};
            --link: ${lightTheme.color};

            .thumb {
                left: -4px
            }
        }

        &.dark {
            -webkit-font-smoothing: antialiased;
            --bg: ${darkTheme.background};
            --header: ${darkTheme.color};
            --text: ${darkTheme.color};
            --link: ${darkTheme.color};

            .thumb {
                left: -36px;
            }
        }

        .thumb.fade {
            transition: all 0.5s cubic-bezier(0.23, 1, 0.32, 1) 0ms !important;
        }
    }
`;

export default Stylesheet;
