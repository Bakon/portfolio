import React, {ReactElement, useState, useEffect, SetStateAction} from 'react';
import styled from 'styled-components';
import SVG from './svg';
import Toggle from './toggle';
import {spacing, theme, colors, media, multiply} from '../css-util';

type Props = {
    className?: string;
};

declare global {
    interface Window {
        __theme: SetStateAction<null>;
        __onThemeChange: () => SetStateAction<void>;
        __setPreferredTheme: (e) => void;
    }
}

export default function Header({className}: Props): ReactElement {
    const [theme, setTheme] = useState(null);

    useEffect(() => {
        setTheme(window.__theme);
        window.__onThemeChange = (): SetStateAction<void> => setTheme(window.__theme);
    }, []);

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
            <Toggle
                checked={theme === 'dark'}
                onChange={(e): void =>
                    window.__setPreferredTheme(e.target.checked ? 'dark' : 'light')
                }
                icons={{
                    checked: <SVG icon="moon" />,
                    unchecked: <SVG icon="sun" />,
                }}
            />
        </StyledHeader>
    );
}

const StyledHeader = styled.header`
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    align-items: center;
    height: ${spacing.header};
    margin: auto;
    width: 100%;
    max-width: ${spacing.container};
    padding: ${spacing.medium} ${spacing.mediumLarge};
    padding-right: ${spacing.mediumLarge};
    color: ${theme.text};
    background-color: ${theme.background};
    margin-bottom: 1.45rem;

    ${media.mobileL} {
        padding: ${spacing.medium};
        padding-right: ${spacing.regular};
    }

    a {
        text-decoration: none;
        color: ${theme.link};
    }

    .nav {
        display: flex;
        flex-flow: row nowrap;
        width: 100%;
    }

    svg.logo {
        width: ${multiply(spacing.regularMedium, 3)};
        height: ${multiply(spacing.regularMedium, 3)};
        margin-right: ${spacing.large};

        ${media.mobileL} {
            margin-right: ${spacing.regularMedium};
        }
    }

    svg.menu {
        display: none;
        width: ${multiply(spacing.regularMedium, 3)};
        height: ${multiply(spacing.regularMedium, 3)};
        fill: ${theme.text};

        ${media.tablet} {
            display: flex;
            margin-right: ${spacing.large};
        }

        ${media.mobileL} {
            width: ${spacing.mediumLarge};
            height: ${spacing.mediumLarge};
            margin-right: ${spacing.medium};
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
`;
