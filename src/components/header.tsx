import React, { ReactElement, useState, useEffect, SetStateAction } from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import SVG from './svg';
import Toggle from './toggle';
import { spacing, theme, media } from '../util/css-util';

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
                    <Link href="/">
                        <a>About me</a>
                    </Link>
                    <Link href="/resume">
                        <a>Resume</a>
                    </Link>
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
    padding: ${spacing.regular} ${spacing.mediumLarge};
    padding-right: ${spacing.mediumLarge};

    background-color: ${theme.background};
    color: ${theme.text};

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
        width: ${spacing.large};
        height: ${spacing.large};
        margin-right: ${spacing.mediumLarge};

        ${media.tabletS} {
            margin-right: 0;
        }
    }

    .links {
        display: flex;
        flex-flow: row nowrap;
        justify-content: flex-end;
        align-items: center;
        flex: 1;
        width: 100%;

        ${media.tabletS} {
            justify-content: space-around;
            justify-content: space-evenly;
        }

        a {
            margin: 0 ${spacing.medium};
            cursor: pointer;
            border-radius: 4px;
            border-bottom: 2px solid transparent;

            &:hover {
                text-decoration: underline;
            }

            ${media.tabletS} {
                margin: 0;
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

            ${media.tabletS} {
                display: none;
            }
        }
    }

    .actions {
        margin-left: auto;
        display: flex;
        align-items: center;
    }
`;
