import {createGlobalStyle} from 'styled-components';
import {colors} from './css-util';

const lightTheme = {
    background: colors.white,
    color: colors.text,
    link: colors.blue,
    seperator: colors.lightGray,
};

const darkTheme = {
    background: colors.dark,
    color: colors.white,
    link: colors.lightBlue,
    seperator: colors.darkGray,
};

export const Stylesheet = createGlobalStyle`
    * {
        box-sizing: border-box;
    }

    body {
        margin: 0;
        font-size: 18px;
        background-color: var(--bg);
        font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;

        &.light {
            --bg: ${lightTheme.background};
            --header: ${lightTheme.color};
            --text: ${lightTheme.color};
            --link: ${lightTheme.color};
            --seperator: ${lightTheme.seperator};

            .thumb {
                left: -4px
            }

            a {
                color: ${lightTheme.link};
                text-decoration: none;
            }

            span, p,
            h1, h2, h3, h4, h5, h6 {
                color: ${lightTheme.color};
            }

            svg {
                fill: ${lightTheme.color};
            }
        }

        &.dark {
            -webkit-font-smoothing: antialiased;
            --bg: ${darkTheme.background};
            --header: ${darkTheme.color};
            --text: ${darkTheme.color};
            --link: ${darkTheme.color};
            --seperator: ${darkTheme.seperator};

            .thumb {
                left: -36px;
            }

            a {
                color: ${darkTheme.link};
                text-decoration: none;
            }

            span, p,
            h1, h2, h3, h4, h5, h6 {
                color: ${darkTheme.color};
            }


            svg {
                fill: ${darkTheme.color};
            }
        }

        .thumb.fade {
            transition: all 0.5s cubic-bezier(0.23, 1, 0.32, 1) 0ms;
        }
    }
`;
