import React, {
    useState,
    useEffect,
    useRef,
    ReactElement,
    FocusEvent,
    MouseEvent,
} from 'react';
import styled from 'styled-components';
import { colors } from '../util/css-util';

type Props = {
    onBlur?: (event: FocusEvent) => void;
    onFocus?: (event: FocusEvent) => void;
    onChange?: (event: { target: { checked: boolean } }) => void;
    icons: { [key: string]: ReactElement };
    className?: string;
    checked: boolean;
    disabled?: boolean;
};

const Toggle = ({
    onBlur,
    onFocus,
    onChange,
    icons,
    checked,
    disabled = false,
}: Props): ReactElement => {
    const inputRef = useRef<HTMLInputElement>(null);
    const toggleRef = useRef<HTMLDivElement>(null);
    const [isChecked, setChecked] = useState(checked);
    const [isPreviouslyChecked, setPreviouslyChecked] = useState(false);
    const [isFocussed, setFocus] = useState(false);

    useEffect(() => {
        const toggle = toggleRef.current;
        if (toggle) {
            setChecked(window.__theme === 'dark');
            setTimeout(() => toggle.classList.remove('invisible'), 300);
        }
    }, []);

    const handleClick = (event: MouseEvent): void => {
        setPreviouslyChecked(true);

        const checkbox = inputRef.current;

        if (checkbox === null) return;

        if (event.target !== checkbox) {
            event.preventDefault();
            checkbox.focus();
            checkbox.click();
            return;
        }

        setChecked(checkbox.checked);
    };

    const handleFocus = (event: FocusEvent): void => {
        if (onFocus) onFocus(event);

        setFocus(true);
    };

    const handleBlur = (event: FocusEvent): void => {
        if (onBlur) onBlur(event);

        setFocus(false);
    };

    return (
        <StyledToggle
            className={!isPreviouslyChecked ? 'invisible' : ''}
            onClick={handleClick}
            disabled={disabled}
            isFocussed={isFocussed}
            isChecked={isChecked}
            ref={toggleRef}
        >
            <div className="thumb" />
            <div className="track">
                <div className="track-button checked">{icons['checked']}</div>
                <div className="track-button unchecked">{icons['unchecked']}</div>
            </div>
            <input
                onChange={onChange}
                checked={isChecked}
                ref={inputRef}
                onFocus={handleFocus}
                onBlur={handleBlur}
                className="checkbox-toggle"
                type="checkbox"
                aria-label="Switch between Dark and Light mode"
            />
        </StyledToggle>
    );
};

export default Toggle;

type StyleProps = {
    disabled: boolean;
    isFocussed: boolean;
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

    &.invisible {
        visibility: hidden;

        * {
            transition: none;
        }
    }

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
        left: 2px;
        width: 28px;
        height: 28px;
        border-radius: 50%;
        z-index: 1000;
        background-color: ${colors.snow};
        box-sizing: border-box;
        transition: all 0.5s cubic-bezier(0.23, 1, 0.32, 1) 0ms;
        transform: translateX(${({ isChecked }): number => (isChecked ? 32 : 0)}px);
        ${({ isFocussed }): string | false =>
            isFocussed && `box-shadow: 0px 0px 2px 3px ${colors.blue};`}

        &.fade {
            transition: none;
        }
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
                transition: opacity 0s ease;
                opacity: ${({ isChecked }): number => (isChecked ? 1 : 0)};
            }

            &.unchecked {
                right: 10px;
                transition: opacity 0.25s ease;
                opacity: ${({ isChecked }): number => (isChecked ? 0 : 1)};
            }
        }
    }
`;
