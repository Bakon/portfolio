import React, { ReactElement } from 'react';
import styled from 'styled-components';
import { colors } from '../util/css-util';
import SVG from './svg';
import useDarkMode from './dark-mode';

type Props = {
    onChange?: (event: { target: { checked: boolean } }) => void;
    className?: string;
};

const ThemeToggle = ({ className }: Props): ReactElement => {
    const darkMode = useDarkMode(false);
    const classes =
        'react-toggle' +
        (darkMode.value ? ' react-toggle--checked' : '') +
        (className ? ' ' + className : '');
    return (
        <div className={classes} onClick={darkMode.toggle}>
            <div className="react-toggle-thumb" />
            <div className="react-toggle-track">
                <div className="react-toggle-track-check">
                    <SVG icon="sun" />
                </div>
                <div className="react-toggle-track-x">
                    <SVG icon="moon" />
                </div>
                <input
                    onChange={darkMode.toggle}
                    checked={darkMode.value}
                    className="react-toggle-screenreader-only"
                    type="checkbox"
                    aria-label="Switch between Dark and Light mode"
                />
            </div>
        </div>
    );
};

export default ThemeToggle;

type StyleProps = {
    isChecked: boolean | undefined;
};

const StyledToggle = styled.div<StyleProps>`
    display: flex;
    align-items: center;
    height: 100%;
    display: inline-block;
    position: relative;
    cursor: pointer;
    background-color: transparent;
    border: 0;
    padding: 0;
    user-select: none;
    touch-action: pan-x;
    -webkit-touch-callout: none;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);

    &:active .thumb {
        box-shadow: 0px 0px 5px 5px ${colors.blue};
    }

    .checkbox-toggle {
        clip: rect(0 0 0 0);
        position: absolute;
    }

    .thumb {
        position: absolute;
        top: 2px;
        ${({ isChecked }): string => (isChecked ? 'left: 34px' : 'left: 2px')};
        width: 28px;
        height: 28px;
        border-radius: 50%;
        z-index: 1000;
        background-color: ${colors.snow};
        box-sizing: border-box;
        transition: all 0.5s cubic-bezier(0.23, 1, 0.32, 1) 0ms;
    }

    .track {
        width: 64px;
        height: 32px;
        padding: 0;
        border-radius: 30px;
        background-color: hsl(222, 14%, 7%);
        transition: all 0.2s ease;

        &-button {
            position: absolute;
            width: 18px;
            height: 18px;
            top: 0px;
            bottom: 0px;
            margin-top: auto;
            margin-bottom: auto;
            line-height: 0;

            &.checked {
                left: 10px;
                opacity: ${({ isChecked }): number => (isChecked ? 1 : 0)};
            }

            &.unchecked {
                right: 10px;
                opacity: ${({ isChecked }): number => (isChecked ? 0 : 1)};
            }
        }
    }
`;
