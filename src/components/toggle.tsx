import React, { ReactElement, SetStateAction, useState } from 'react';
import styled from 'styled-components';
import { colors } from '../util/css-util';

type Props = {
    onClick: () => SetStateAction<void>;
    icons: { [key: string]: ReactElement };
    className?: string;
};

const Toggle = ({ className, onClick, icons }: Props): ReactElement => {
    const [hasClicked, toggleFirstClick] = useState(false);

    return (
        <StyledToggle
            className={className}
            onClick={(): void => {
                toggleFirstClick(true);
                onClick();
            }}
        >
            <div className={`thumb ${hasClicked ? 'fade' : ''}`} />
            <div className="track">
                <div className="track-button checked">{icons['checked']}</div>
                <div className="track-button unchecked">{icons['unchecked']}</div>
            </div>
        </StyledToggle>
    );
};

export default Toggle;

const StyledToggle = styled.div`
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

    .thumb {
        position: absolute;
        top: 4px;
        width: 24px;
        height: 24px;
        border-radius: 50%;
        z-index: 1000;
        background-color: ${colors.snow};
        box-sizing: border-box;
        transform: translateX(40px);
    }

    .track {
        width: 64px;
        height: 32px;
        padding: 0;
        border-radius: 30px;
        background-color: hsl(222, 14%, 7%);

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
