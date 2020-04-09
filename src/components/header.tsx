import React, { ReactElement, useState, useEffect, SetStateAction } from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import SVG from './svg';
import Toggle from './toggle';
import { spacing, theme, media, multiply } from '../util/css-util';

declare global {
    interface Window {
        __theme: string;
        __setTheme: (theme: string) => void;
        __onThemeChange: () => SetStateAction<void>;
    }
}

const Header = ({ className }: { className?: string }): ReactElement => {
    const [theme, setTheme] = useState<string>('');

    useEffect(() => {
        setTheme(window.__theme);
        window.__onThemeChange = (): SetStateAction<void> => setTheme(theme);
    });

    return (
        <StyledHeader className={className}>
            <nav className="nav">
                <div className="branding">
                    <SVG icon="logo" />
                    <Link href="/">
                        <a className="name">J Schilders</a>
                    </Link>
                </div>
                <div className="links">
                    <span>About me</span>
                    <span>Projects</span>
                    <span>Posts</span>
                    <span>Contact</span>
                </div>
                <div className="actions">
                    <Toggle
                        onClick={(): void =>
                            window.__setTheme(
                                window.__theme === 'dark' ? 'light' : 'dark'
                            )
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

        ${media.tabletL} {
            display: flex;
        }

        ${media.mobileL} {
            margin-left: ${spacing.regularMedium};
        }
    }

    .links {
        display: flex;
        flex-flow: row nowrap;
        justify-content: flex-end;
        align-items: center;
        flex: 1;
        width: 100%;

        ${media.tabletL} {
            display: none;
        }

        span {
            padding: ${spacing.regularMedium};
            margin: 0 ${spacing.regularMedium};
            cursor: pointer;
            border-radius: 4px;
            border-bottom: 2px solid transparent;

            &:hover {
                text-decoration: underline;
            }
        }
    }

    .branding {
        display: flex;
        height: 100%;

        .name {
            margin: auto;
            font-size: 2rem;
            font-weight: 700;

            ${media.mobileL} {
                font-size: 1.5rem;
            }
        }
    }

    .actions {
        margin-left: auto;
        display: flex;
        align-items: center;
    }
`;
