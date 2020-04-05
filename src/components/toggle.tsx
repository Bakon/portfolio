import React, {
    useState,
    useEffect,
    useRef,
    ReactElement,
    FocusEvent,
    TouchEvent,
    MouseEvent,
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
    className?: string;
    disabled?: boolean;
    icons: { [key: string]: ReactElement };
    checked?: boolean;
    onFocus?: (event: FocusEvent) => void;
    onBlur?: (event: FocusEvent) => void;
    onChange?: (event: { target: { checked: boolean } }) => void;
};

const Toggle = ({
    className,
    onFocus,
    onBlur,
    icons,
    onChange,
    checked,
    disabled = false,
}: Props): ReactElement => {
    const inputRef = useRef<HTMLInputElement>(null);
    const toggleRef = useRef<HTMLDivElement>(null);
    const [isChecked, setChecked] = useState(!checked);
    const [isFocussed, setFocus] = useState(false);
    const [isPreviouslyChecked, setPreviouslyChecked] = useState<boolean | null>(null);
    const [isFocussedAtTouchStart, setFocussedAtTouchStart] = useState(false);
    const [isTouchStarted, setTouchStarted] = useState(false);
    const [startX, setStartX] = useState<null | number>(null);
    const [isTouched, setTouch] = useState(false);

    useEffect(() => {
        console.log(checked !== isChecked);
        console.log(toggleRef.current);
        if (checked !== isChecked) {
            setChecked(!isChecked);
        }
    }, [checked]);

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
            ref={toggleRef}
            disabled={disabled}
            isFocussed={isFocussed}
            isChecked={isChecked}
        >
            <div
                className="toggle"
                onClick={handleClick}
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}
                onTouchCancel={handleTouchCancel}
            >
                <div className="toggle-track">
                    <div className="toggle-track-check">{icons['checked']}</div>
                    <div className="toggle-track-x">{icons['unchecked']}</div>
                </div>
                <div className="toggle-thumb" />
                <input
                    onChange={onChange}
                    checked={checked}
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
    isChecked: boolean;
};

const StyledToggle = styled.div<StyleProps>`
    display: flex;
    align-items: center;
    height: 100%;

    &.initial-render {
        .toggle-thumb {
            transform: translateX(32px);
            transition: none;
        }

        .toggle-track-x {
            opacity: 1;
            transition: none;
        }
    }

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
        transition: opacity 0.25s ease;
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
