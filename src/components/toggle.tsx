import React, {
    useState,
    useEffect,
    useRef,
    ReactElement,
    FocusEvent,
    TouchEvent,
    MouseEvent,
    TouchList,
} from 'react';
import styled from 'styled-components';
import { colors } from '../util/css-util';

type EventProps = {
    changedTouches?: React.TouchList;
    pageX?: number;
    pageY?: number;
};

const pointerCoord = (event: EventProps): { x: number; y: number | undefined } => {
    // get coordinates for either a mouse click
    // or a touch depending on the given event
    if (event) {
        const changedTouches = event.changedTouches;

        if (changedTouches && changedTouches.length > 0) {
            const touch = changedTouches[0];
            return { x: touch.clientX, y: touch.clientY };
        }
        const { pageX, pageY } = event;

        if (pageX !== undefined) return { x: pageX, y: pageY };
    }
    return { x: 0, y: 0 };
};

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
    const [isPreviouslyChecked, setPreviouslyChecked] = useState<boolean | null>(null);
    const [isFocussedAtTouchStart, setFocussedAtTouchStart] = useState(false);
    const [isTouchStarted, setTouchStarted] = useState(false);
    const [startX, setStartX] = useState<null | number>(null);
    const [isTouched, setTouch] = useState(false);

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

        setPreviouslyChecked(checkbox.checked);

        if (event.target !== checkbox) {
            event.preventDefault();
            checkbox.focus();
            checkbox.click();
            return;
        }

        setChecked(checkbox.checked);
    };

    const handleTouchStart = (event: EventProps): void => {
        setStartX(pointerCoord(event).x);
        setTouchStarted(true);
        setFocussedAtTouchStart(isFocussed);
        setFocus(true);
    };

    const handleTouchMove = (event: EventProps): void => {
        if (!isTouchStarted) return;

        setTouch(true);

        if (startX != null) {
            const currentX = pointerCoord(event).x;

            if (isChecked && currentX + 15 < startX) {
                setChecked(false);
                setStartX(currentX);
            } else if (!isChecked && currentX - 15 > startX) {
                setChecked(true);
                setStartX(currentX);
            }
        }
    };

    const handleTouchEnd = (event: TouchEvent): void => {
        const checkbox = inputRef.current;

        if (!isTouched || checkbox === null) return;

        event.preventDefault();

        if (startX != null) {
            if (isPreviouslyChecked !== isChecked) checkbox.click();

            setTouchStarted(false);
            setStartX(null);
            setTouch(false);
        }

        if (!isFocussedAtTouchStart) setFocus(false);
    };

    const handleTouchCancel = (): void => {
        if (startX != null) {
            setTouchStarted(false);
            setStartX(null);
            setTouch(false);
        }

        if (!isFocussedAtTouchStart) setFocus(false);
    };

    const handleFocus = (event: FocusEvent): void => {
        if (onFocus) onFocus(event);

        setFocussedAtTouchStart(true);
        setFocus(true);
    };

    const handleBlur = (event: FocusEvent): void => {
        if (onBlur) onBlur(event);

        setFocussedAtTouchStart(false);
        setFocus(false);
    };

    return (
        <StyledToggle
            className={className}
            onClick={handleClick}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            onTouchCancel={handleTouchCancel}
            disabled={disabled}
            isFocussed={isFocussed}
            isChecked={isChecked}
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
