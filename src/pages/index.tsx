import React, { ReactElement } from 'react';
import Head from 'next/head';
import styled from 'styled-components';
import Layout from '../components/layout';
import { spacing, theme, media } from '../util/css-util';

const App = (): ReactElement => (
    <Layout>
        <Head>
            <title>hello world!</title>
        </Head>
        <StyledMain>
            <h1>
                Hiya, I&apos;m Julio! <span> 👋</span>
            </h1>
            <h2>Please come back soon :)</h2>
        </StyledMain>
    </Layout>
);

export default App;

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
