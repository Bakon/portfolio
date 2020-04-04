import React, {ReactElement} from 'react';
import styled from 'styled-components';
import SVG from './svg';
import {spacing, colors, media} from '../css-util';

type Props = {
    className?: string;
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
                <SVG icon="logo" />
                <div className="name">
                    <h3>Julio Schilders</h3>
                    <h3>JavaScript Developer</h3>
                    <h3 className="mobile">Julio Schilders</h3>
                    <h3 className="mobile">JavaScript Dev</h3>
                </div>
                <div className="links">
                    <span>About me</span>
                    <span>Projects</span>
                    <span>Contact</span>
                    <SVG icon="menu" />
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
    // background: ${({theme}): string => theme.background};
    background: transparent;
    color: ${({theme}): string => theme.color};
    margin: auto;
    width: 100%;
    max-width: ${spacing.container};
    padding: ${spacing.large};
    padding-right: ${spacing.mediumLarge};

    ${media.mobileL} {
        padding: ${spacing.medium};
        padding-right: ${spacing.small};
    }

    .nav {
        display: flex;
        flex-flow: row nowrap;
        width: 100%;
    }

    svg {
        width: ${spacing.large};
        height: ${spacing.large};

        &.logo {
            margin-right: ${spacing.large};

            ${media.mobileL} {
                margin-right: ${spacing.regularMedium};
            }
        }

        &.menu {
            display: none;
            fill: ${({theme}): string => theme.color};

            ${media.tablet} {
                display: flex;
                margin-right: ${spacing.large};
            }

            ${media.mobileL} {
                margin-right: ${spacing.regular};
            }
        }
    }

    .name {
        h3 {
            margin: 0;
        }

        .mobile {
            display: none;
        }

        ${media.mobileM} {
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

            ${media.tablet} {
                display: none;
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
