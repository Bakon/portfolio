import React from 'react';
import Head from 'next/head';
import styled from 'styled-components';
import { spacing, theme, media } from '../util/css-util';
import { NextPage } from 'next';

const Main: NextPage = () => (
    <StyledMain>
        <Head>
            <title>hello world!</title>
        </Head>
        <h1>
            Hiya, I&apos;m Julio! <span> 👋</span>
        </h1>
        <h2>Please come back soon :)</h2>
    </StyledMain>
);

export default Main;

const StyledMain = styled.main`
    flex: 1;
    margin: auto;
    width: 100%;
    max-width: ${spacing.container};
    padding: 0 ${spacing.large};

    color: ${theme.text};

    ${media.mobileL} {
        padding: 0 ${spacing.medium};
    }
`;
