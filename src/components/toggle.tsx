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
    className,
    checked,
    disabled = false,
}: Props): ReactElement => {
    const inputRef = useRef<HTMLInputElement>(null);
    const toggleRef = useRef<HTMLDivElement>(null);
    const [isChecked, setChecked] = useState(checked);
    const [isFocussed, setFocus] = useState(false);

    useEffect(() => {
        const toggle = toggleRef.current;

        if (toggle && window.__theme === 'dark') {
            toggle.classList.add('fade');
            setChecked(window.__theme === 'dark');

            setTimeout(() => toggle.classList.remove('fade'), 200);
        }
    }, []);

    const handleClick = (event: MouseEvent): void => {
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
            className={className}
            disabled={disabled}
            isFocussed={isFocussed}
            isChecked={isChecked}
            onClick={handleClick}
        >
            <div className="toggle" ref={toggleRef}>
                <div className="toggle-track">
                    <div className="toggle-track-check">{icons['checked']}</div>
                    <div className="toggle-track-x">{icons['unchecked']}</div>
                </div>
                <div className="toggle-thumb" />
                <input
                    onChange={onChange}
                    checked={isChecked}
                    ref={inputRef}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    className="toggle-screenreader-only"
                    type="checkbox"
                    aria-label="Switch between Dark and Light mode"
                />
            </div>
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

    .toggle {
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

        &:active .toggle-thumb {
            box-shadow: 0px 0px 5px 5px ${colors.blue};
        }

        &.fade {
            .toggle-thumb {
                transform: translateX(32px);
                transition: none;
            }
        }
    }

    .toggle-screenreader-only {
        border: 0;
        clip: rect(0 0 0 0);
        height: 1px;
        margin: -1px;
        overflow: hidden;
        padding: 0;
        position: absolute;
        width: 1px;
    }

    .toggle-track {
        width: 64px;
        height: 32px;
        padding: 0;
        border-radius: 30px;
        background-color: hsl(222, 14%, 7%);
        transition: all 0.2s ease;
    }

    .toggle-track-check {
        position: absolute;
        width: 18px;
        height: 18px;
        left: 10px;
        top: 0px;
        bottom: 0px;
        margin-top: auto;
        margin-bottom: auto;
        line-height: 0;
        transition: opacity 0s ease;
        opacity: ${({ isChecked }): number => (isChecked ? 1 : 0)};
    }

    .toggle-track-x {
        position: absolute;
        width: 18px;
        height: 18px;
        right: 10px;
        top: 0px;
        bottom: 0px;
        margin-top: auto;
        margin-bottom: auto;
        line-height: 0;
        transition: opacity 0.25s ease;
        opacity: ${({ isChecked }): number => (isChecked ? 0 : 1)};
    }

    .toggle-thumb {
        position: absolute;
        top: 2px;
        left: 2px;
        width: 28px;
        height: 28px;
        border-radius: 50%;
        background-color: #fafafa;
        box-sizing: border-box;
        transition: all 0.5s cubic-bezier(0.23, 1, 0.32, 1) 0ms;
        transform: translateX(${({ isChecked }): number => (isChecked ? 32 : 0)}px);
        ${({ isFocussed }): string | false =>
            isFocussed && `box-shadow: 0px 0px 2px 3px ${colors.blue};`}
    }
`;
