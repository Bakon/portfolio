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
                <div className="branding">
                    <SVG icon="logo" />
                    <div className="name">
                        <h3 className="mobile">Julio Schilders</h3>
                        <h3 className="mobile">JavaScript Dev</h3>
                    </div>
                </div>
                <div className="name">
                    <h3>Julio Schilders</h3>
                    <h3>JavaScript Developer</h3>
                </div>
                <div className="links">
                    <span>About me</span>
                    <span>Projects</span>
                    <span>Contact</span>
                </div>
                <div className="actions">
                    <Toggle
                        checked={theme === 'dark'}
                        onChange={(e): void =>
                            window.__setPreferredTheme(
                                e.target.checked ? 'dark' : 'light'
                            )
                        }
                        icons={{
                            checked: <SVG icon="moon" />,
                            unchecked: <SVG icon="sun" />,
                        }}
                    />
                    <SVG icon="menu" />
                </div>
            </nav>
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
    }

    a {
        text-decoration: none;
        color: ${theme.link};
    }

    .nav {
        display: flex;
        flex-flow: row nowrap;
        align-items: center;
        width: 100%;

        ${media.mobileL} {
            justify-content: space-between;
        }
    }

    svg.logo {
        width: ${multiply(spacing.regularMedium, 3)};
        height: ${multiply(spacing.regularMedium, 3)};
        margin-right: ${spacing.mediumLarge};

        ${media.mobileL} {
            margin-right: ${spacing.regularMedium};
        }
    }

    svg.menu {
        display: none;
        width: ${multiply(spacing.regularMedium, 3)};
        height: ${multiply(spacing.regularMedium, 3)};
        fill: ${theme.text};
        margin-left: ${spacing.mediumLarge};

        ${media.tablet} {
            display: flex;
        }

        ${media.mobileL} {
            width: ${spacing.mediumLarge};
            height: ${spacing.mediumLarge};
            margin-left: ${spacing.regularMedium};
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

        ${media.tablet} {
            display: none;
        }

        span {
            padding: ${spacing.regularMedium};
            margin: 0 ${spacing.regularMedium};
            cursor: pointer;
            border-radius: 4px;
            border-bottom: 2px solid transparent;

            &:hover {
                background: ${colors.blue};
            }
        }
    }

    .branding {
        display: flex;
    }
    .actions {
        margin-left: auto;
        display: flex;
        align-items: center;
    }
`;
