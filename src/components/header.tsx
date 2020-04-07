import React, { ReactElement, useState, useEffect, SetStateAction } from 'react';
import styled from 'styled-components';
import SVG from './svg';
import Toggle from './toggle';
import { spacing, theme, colors, media, multiply } from '../util/css-util';

declare global {
    interface Window {
        __theme: string;
        __onThemeChange: () => SetStateAction<void>;
        __setPreferredTheme: (theme: string) => void;
    }
}

const Header = ({ className }: { className?: string }): ReactElement => {
    const [theme, setTheme] = useState<string>('');

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
                        <h3 className="mobile">
                            J<span className="super-mobile">ulio&nbsp;</span>Schilders
                        </h3>
                        <h3 className="mobile">
                            J<span className="super-mobile">ava</span>S
                            <span className="super-mobile">cript</span>&nbsp;Dev
                        </h3>
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
                        onChange={({ target }): void =>
                            window.__setPreferredTheme(target.checked ? 'dark' : 'light')
                        }
                        icons={{
                            checked: <SVG icon="sun" />,
                            unchecked: <SVG icon="moon" />,
                        }}
                    />
                    <SVG icon="menu" />
                </div>
            </nav>
        </StyledHeader>
    );
};

export default Header;

const StyledHeader = styled.header`
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto;
    width: 100%;
    max-width: ${spacing.container};
    height: ${spacing.header};
    padding: ${spacing.medium} ${spacing.mediumLarge};
    padding-right: ${spacing.mediumLarge};

    background-color: ${theme.background};
    color: ${theme.text};

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
        height: ${spacing.extraLarge};
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
        width: ${spacing.mediumExtraLarge};
        height: ${spacing.mediumExtraLarge};
        fill: ${theme.text};
        margin-left: ${spacing.mediumLarge};

        ${media.tablet} {
            display: flex;
        }

        ${media.mobileL} {
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

        ${media.mobileS} {
            .super-mobile {
                display: none;
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
        height: 100%;
    }

    .actions {
        margin-left: auto;
        display: flex;
        align-items: center;
    }
`;
