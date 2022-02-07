import React, {ReactElement, useState, useEffect, SetStateAction} from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import SVG from './svg';
import Toggle from './toggle';
import {spacing, theme, device} from '../util/css-util';

declare global {
    interface Window {
        __theme: string;
        __setTheme: (theme: string) => void;
        __onThemeChange: () => SetStateAction<void>;
    }
}

const menuItems = [
    {url: '/', text: 'Home'},
    {url: '/resume', text: 'Resume'},
];

const Header = ({className}: {className?: string}): ReactElement => {
    const [theme, setTheme] = useState<string>('');

    useEffect(() => {
        setTheme(window.__theme);
        window.__onThemeChange = (): SetStateAction<void> => setTheme(theme);
    });

    return (
        <StyledHeader className={className}>
            <nav className="nav">
                <Link href="/">
                    <div className="branding">
                        <SVG icon="logo" />
                        <a className="name">J Schilders</a>
                    </div>
                </Link>
                <div className="links">
                    {menuItems.map(({url, text}) => (
                        <Link key={url} href={url}>
                            <a>{text}</a>
                        </Link>
                    ))}
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
    margin: 0 auto ${spacing.mediumLarge};
    width: 100%;
    max-width: ${spacing.container};
    min-height: ${spacing.header};
    padding: ${spacing.small} ${spacing.mediumLarge} 0;
    padding-right: ${spacing.mediumLarge};

    border-bottom: 1px solid ${theme.seperator};
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

        ${device.mobileL} {
            justify-content: space-between;
        }
    }

    svg.logo {
        width: ${spacing.large};
        max-width: ${spacing.large};
        height: ${spacing.large};
        max-height: ${spacing.large};
        margin-right: ${spacing.regularMedium};

        ${device.tabletS} {
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

        ${device.tabletS} {
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

            ${device.tabletS} {
                margin: 0;
            }
        }
    }

    .branding {
        display: flex;
        height: 100%;
        cursor: pointer;

        .name {
            margin: auto;
            font-size: 2rem;
            font-weight: 700;

            ${device.tabletS} {
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
