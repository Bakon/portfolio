import React, { ReactElement, SetStateAction, useEffect, useState } from 'react';
import styled from 'styled-components';
import { colors } from '../util/css-util';

type Props = {
    onClick: () => any;
    icons: { [key: string]: ReactElement };
    checked: boolean | undefined;
    className?: string;
};

const Toggle = ({ className, onClick, checked, icons }: Props): ReactElement => {
    const [hasClicked, toggleFirstClick] = useState(false);

    const modifiedClickHandler = () => {
        toggleFirstClick(true);
        onClick();
    };

    return (
        <StyledToggle
            className={className}
            onClick={() => modifiedClickHandler()}
            checked={checked}
            hasClicked={hasClicked}
        >
            <div className="thumb" />
            <div className="track">
                <div className="track-button checked">{icons['checked']}</div>
                <div className="track-button unchecked">{icons['unchecked']}</div>
            </div>
        </StyledToggle>
    );
};

export default Toggle;

type StyleProps = {
    checked: boolean | undefined;
    hasClicked: boolean;
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

    * {
        transition: ${({ hasClicked }): string => (hasClicked ? '' : 'none !important')};
    }

    .thumb {
        position: absolute;
        top: 4px;
        ${({ checked, hasClicked }): string =>
            !hasClicked && checked ? 'left: -31px;' : 'left: -2px;'}
        width: 24px;
        height: 24px;
        border-radius: 50%;
        z-index: 1000;
        background-color: ${colors.snow};
        box-sizing: border-box;
        transition: all 0.5s cubic-bezier(0.23, 1, 0.32, 1) 0ms;
        transform: translateX(
            ${({ checked, hasClicked }): number => (hasClicked && checked ? 4 : 36)}px
        );
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
            }

            &.unchecked {
                right: 10px;
            }
        }
    }
`;
