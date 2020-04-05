import React, {ReactElement} from 'react';
import styled from 'styled-components';
import Head from 'next/head';
import {spacing, theme, media} from '../css-util';

export default function Main(): ReactElement {
    return (
        <React.Fragment>
            <Head>
                <title>Portfolio Julio Schilders</title>
            </Head>
            <StyledMain>
                <h1>
                    Hiya, I&apos;m Julio! <span> 👋</span>
                </h1>
                <h2>Please come back soon :)</h2>
            </StyledMain>
        </React.Fragment>
    );
}

const StyledMain = styled.main`
    flex: 1;
    color: ${theme.text};
    padding: ${spacing.large};
    margin: auto;
    width: 100%;
    max-width: ${spacing.container};

    ${media.mobileL} {
        padding: ${spacing.medium};
    }
`;
