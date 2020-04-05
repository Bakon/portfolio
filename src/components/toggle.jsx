import React, {PureComponent} from 'react';
import styled from 'styled-components';
import {colors, spacing, media} from 'css-util';

/* eslint-disable */
function pointerCoord(event) {
    // get coordinates for either a mouse click
    // or a touch depending on the given event
    if (event) {
        const changedTouches = event.changedTouches;
        if (changedTouches && changedTouches.length > 0) {
            const touch = changedTouches[0];
            return {x: touch.clientX, y: touch.clientY};
        }
        const pageX = event.pageX;
        if (pageX !== undefined) {
            return {x: pageX, y: event.pageY};
        }
    }
    return {x: 0, y: 0};
}

export default class Toggle extends PureComponent {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.handleTouchStart = this.handleTouchStart.bind(this);
        this.handleTouchMove = this.handleTouchMove.bind(this);
        this.handleTouchEnd = this.handleTouchEnd.bind(this);
        this.handleTouchCancel = this.handleTouchCancel.bind(this);
        this.handleFocus = this.handleFocus.bind(this);
        this.handleBlur = this.handleBlur.bind(this);
        this.previouslyChecked = !!(props.checked || props.defaultChecked);
        this.state = {
            checked: !!(props.checked || props.defaultChecked),
            hasFocus: false,
        };
    }

    UNSAFE_componentWillReceiveProps(nextProps) {
        if ('checked' in nextProps) {
            this.setState({checked: !!nextProps.checked});
            this.previouslyChecked = !!nextProps.checked;
        }
    }

    handleClick(event) {
        const checkbox = this.input;
        this.previouslyChecked = checkbox.checked;
        if (event.target !== checkbox && !this.moved) {
            event.preventDefault();
            checkbox.focus();
            checkbox.click();
            return;
        }

        this.setState({checked: checkbox.checked});
    }

    handleTouchStart(event) {
        this.startX = pointerCoord(event).x;
        this.touchStarted = true;
        this.hadFocusAtTouchStart = this.state.hasFocus;
        this.setState({hasFocus: true});
    }

    handleTouchMove(event) {
        if (!this.touchStarted) return;
        this.touchMoved = true;

        if (this.startX != null) {
            const currentX = pointerCoord(event).x;
            if (this.state.checked && currentX + 15 < this.startX) {
                this.setState({checked: false});
                this.startX = currentX;
            } else if (!this.state.checked && currentX - 15 > this.startX) {
                this.setState({checked: true});
                this.startX = currentX;
            }
        }
    }

    handleTouchEnd(event) {
        if (!this.touchMoved) return;
        const checkbox = this.input;
        event.preventDefault();

        if (this.startX != null) {
            if (this.previouslyChecked !== this.state.checked) {
                checkbox.click();
            }

            this.touchStarted = false;
            this.startX = null;
            this.touchMoved = false;
        }

        if (!this.hadFocusAtTouchStart) {
            this.setState({hasFocus: false});
        }
    }

    handleTouchCancel(event) {
        if (this.startX != null) {
            this.touchStarted = false;
            this.startX = null;
            this.touchMoved = false;
        }

        if (!this.hadFocusAtTouchStart) {
            this.setState({hasFocus: false});
        }
    }

    handleFocus(event) {
        const {onFocus} = this.props;

        if (onFocus) {
            onFocus(event);
        }

        this.hadFocusAtTouchStart = true;
        this.setState({hasFocus: true});
    }

    handleBlur(event) {
        const {onBlur} = this.props;

        if (onBlur) {
            onBlur(event);
        }

        this.hadFocusAtTouchStart = false;
        this.setState({hasFocus: false});
    }

    getIcon(type) {
        const {icons} = this.props;
        if (!icons) {
            return null;
        }
        return icons[type] === undefined ? Toggle.defaultProps.icons[type] : icons[type];
    }

    render() {
        const {className, icons: _icons, ...inputProps} = this.props;
        const classes =
            'toggle' +
            (this.state.checked ? ' toggle--checked' : '') +
            (this.state.hasFocus ? ' toggle--focus' : '') +
            (this.props.disabled ? ' toggle--disabled' : '') +
            (className ? ' ' + className : '');
        return (
            <StyledToggle>
                <div
                    className={classes}
                    onClick={this.handleClick}
                    onTouchStart={this.handleTouchStart}
                    onTouchMove={this.handleTouchMove}
                    onTouchEnd={this.handleTouchEnd}
                    onTouchCancel={this.handleTouchCancel}
                >
                    <div className="toggle-track">
                        <div className="toggle-track-check">
                            {this.getIcon('checked')}
                        </div>
                        <div className="toggle-track-x">
                            {this.getIcon('unchecked')}
                        </div>
                    </div>
                    <div className="toggle-thumb" />
                    <input
                        {...inputProps}
                        ref={(ref) => this.input = ref}
                        onFocus={this.handleFocus}
                        onBlur={this.handleBlur}
                        className="toggle-screenreader-only"
                        type="checkbox"
                        aria-label="Switch between Dark and Light mode"
                    />
                </div>
            </StyledToggle>
        );
    }
}

const StyledToggle = styled.div`
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
        opacity: 0;
        transition: opacity 0.25s ease;
    }

    .toggle--checked .toggle-track-check {
        opacity: 1;
        transition: opacity 0.25s ease;
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
        opacity: 1;
        transition: opacity 0.25s ease;
    }

    .toggle--checked .toggle-track-x {
        opacity: 0;
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
        transform: translateX(0);
    }

    .toggle--checked .toggle-thumb {
        transform: translateX(32px);
        border-color: #19ab27;
    }

    .toggle--focus .toggle-thumb {
        box-shadow: 0px 0px 3px 4px ${colors.blue};
    }

    .toggle:active .toggle-thumb {
        box-shadow: 0px 0px 6px 6px ${colors.blue};
    }
`;
