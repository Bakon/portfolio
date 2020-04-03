import React, {ReactElement} from 'react';
import styled from 'styled-components';
import Head from 'next/head';
import Header from '../components/header';
import Footer from '../components/footer';

export default function Main(): ReactElement {
    return (
        <React.Fragment>
            <Head>
                <title>Julio Schilders | Home</title>
            </Head>
            <StyledContainer>
                <Header />
                <h1>hello world!</h1>
                <Footer />
            </StyledContainer>
        </React.Fragment>
    );
}

const StyledContainer = styled.div`
    height: 100vh;
`;
