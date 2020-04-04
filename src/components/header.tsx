import React, {ReactElement} from 'react';
import styled from 'styled-components';
import SVG from './svg';
import {spacing, colors} from '../css-util';

type Props = {
    className: string;
    isThemeDark: boolean;
    toggleTheme: () => void;
};

export default function Header({
    className,
    isThemeDark,
    toggleTheme,
}: Props): ReactElement {
    const label = `Toggle ${isThemeDark ? 'dark' : 'light'} mode`;

    return (
        <StyledHeader className={className}>
            <nav className="nav">
                <div className="name">
                    <h3>Julio Schilders</h3>
                    <h3>Developer</h3>
                    <h3 className="mobile">JS</h3>
                    <h3 className="mobile">Dev</h3>
                </div>
                <div className="links">
                    <span>About me</span>
                    <span>Projects</span>
                    <span>Contact</span>
                </div>
            </nav>
            <button className="theme-switcher" aria-label={label} title={label}>
                <SVG icon={isThemeDark ? 'sun' : 'moon'} onClick={toggleTheme} />
            </button>
        </StyledHeader>
    );
}

const StyledHeader = styled.header`
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    align-items: center;
    height: ${spacing.header};
    background: ${({theme}): string => theme.background};
    color: ${({theme}): string => theme.color};

    svg {
        width: ${spacing.large};
        height: ${spacing.large};
    }

    .nav {
        display: flex;
        flex-flow: row nowrap;
        width: 100%;
    }

    .name {
        h3 {
            margin: 0;
        }
        .mobile {
            display: none;
        }

        @media (max-width: 620px) {
            h3:not(.mobile) {
                display: none;
            }

            .mobile {
                display: flex;
            }
        }
    }

    .links {
        display: flex;
        flex-flow: row nowrap;
        justify-content: flex-end;
        align-items: center;
        flex: 1;
        width: 100%;

        span {
            padding: ${spacing.regularMedium};
            margin: 0 ${spacing.regularMedium};
            cursor: pointer;
            border-radius: 4px;
            border-bottom: 2px solid transparent;

            &:hover {
                background: ${colors.blue};
            }

            @media (max-width: 620px) {
                padding: ${spacing.small};
                margin: 0 ${spacing.small};
            }
        }
    }

    .theme-switcher {
        background: transparent;
        border: none;
        cursor: pointer;
        padding: ${spacing.regularMedium};
    }
`;
