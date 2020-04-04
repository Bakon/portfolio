import React, {useState, useEffect, ReactElement} from 'react';
import styled, {ThemeProvider} from 'styled-components';
import Head from 'next/head';
import Header from '../components/header';
import Footer from '../components/footer';
import {lightTheme, darkTheme, spacing} from '../css-util';

export default function Main(): ReactElement {
    const [isThemeDark, toggleDarkTheme] = useState(false);

    useEffect(() => {
        toggleDarkTheme(localStorage.getItem('theme') === 'dark');
    }, []);

    function toggleTheme(): void {
        localStorage.setItem('theme', isThemeDark ? 'light' : 'dark');

        return toggleDarkTheme(!isThemeDark);
    }

    return (
        <ThemeProvider theme={isThemeDark ? darkTheme : lightTheme}>
            <Head>
                <title>Portfolio Julio Schilders</title>
            </Head>
            <StyledContainer>
                <Header
                    className="header"
                    isThemeDark={isThemeDark}
                    toggleTheme={(): void => toggleTheme()}
                />
                <main className="main">
                    <h1>
                        Hiya, I&apos;m Julio!<span>👋</span>
                    </h1>
                    <h2>Please come back soon :)</h2>
                </main>
                <Footer className="footer" />
            </StyledContainer>
        </ThemeProvider>
    );
}

const StyledContainer = styled.div`
    display: flex;
    flex-flow: column nowrap;
    height: 100vh;
    background: ${({theme}): string => theme.background};

    > .main,
    .header,
    .footer {
        padding: ${spacing.large};
        margin: auto;
        width: 100%;
        max-width: ${spacing.container};

        @media (max-width: 620px) {
            padding: ${spacing.medium};
        }
    }

    @media (max-width: 620px) {
        .header {
            padding-right: 0;
        }
    }

    main {
        flex: 1;
        color: ${({theme}): string => theme.color};
    }
`;
