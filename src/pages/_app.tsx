import React, { ReactElement } from 'react';
import styled from 'styled-components';
import { AppProps } from 'next/app';
import { theme } from '../util/css-util';
import Stylesheet from '../util/stylesheet';
import Header from '../components/header';
import Footer from '../components/footer';

const App = ({ Component, pageProps }: AppProps): ReactElement => (
    <StyledContainer>
        <Stylesheet />
        <Header />
        <Component {...pageProps} />
        <Footer />
    </StyledContainer>
);

export default App;

const StyledContainer = styled.div`
    display: flex;
    flex-flow: column nowrap;
    height: 100vh;

    background: ${theme.background};
`;
