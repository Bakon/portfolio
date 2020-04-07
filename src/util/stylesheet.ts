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
    /*
    * Copyright (c) 2015 instructure-react
    * Forked from https://github.com/aaronshaf/react-toggle/
   **/
   
   .react-toggle {
     touch-action: pan-x;
   
     display: inline-block;
     position: relative;
     cursor: pointer;
     background-color: transparent;
     border: 0;
     padding: 0;
   
     -webkit-touch-callout: none;
     user-select: none;
   
     -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
     -webkit-tap-highlight-color: transparent;
   }
   
   .react-toggle-screenreader-only {
     border: 0;
     clip: rect(0 0 0 0);
     height: 1px;
     margin: -1px;
     overflow: hidden;
     padding: 0;
     position: absolute;
     width: 1px;
   }
   
   .react-toggle-track {
     width: 50px;
     height: 24px;
     padding: 0;
     border-radius: 30px;
     background-color: hsl(222, 14%, 7%);
     transition: all 0.2s ease;
   }
   
   .react-toggle-track-check {
     position: absolute;
     width: 17px;
     height: 17px;
     left: 5px;
     top: 0px;
     bottom: 0px;
     margin-top: auto;
     margin-bottom: auto;
     line-height: 0;
     opacity: 0;
     transition: opacity 0.25s ease;
   }
   
   .react-toggle--checked .react-toggle-track-check {
     opacity: 1;
     transition: opacity 0.25s ease;
   }
   
   .react-toggle-track-x {
     position: absolute;
     width: 17px;
     height: 17px;
     right: 5px;
     top: 0px;
     bottom: 0px;
     margin-top: auto;
     margin-bottom: auto;
     line-height: 0;
     opacity: 1;
     transition: opacity 0.25s ease;
   }
   
   .react-toggle--checked .react-toggle-track-x {
     opacity: 0;
   }
   
   .react-toggle-thumb {
     position: absolute;
     top: 1px;
     left: 1px;
     width: 22px;
     height: 22px;
     border-radius: 50%;
     background-color: #fafafa;
     box-sizing: border-box;
     transition: all 0.5s cubic-bezier(0.23, 1, 0.32, 1) 0ms;
     transform: translateX(0);
   }
   
   .react-toggle--checked .react-toggle-thumb {
     transform: translateX(26px);
     border-color: #19ab27;
   }
   
   .react-toggle--focus .react-toggle-thumb {
     box-shadow: 0px 0px 2px 3px rgb(255, 167, 196);
   }
   
   .react-toggle:active .react-toggle-thumb {
     box-shadow: 0px 0px 5px 5px rgb(255, 167, 196);
   }
`;

export default Stylesheet;
