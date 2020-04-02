import React, {ReactElement} from 'react';
import styled from 'styled-components';
import Head from 'next/head';

export default function Main(): ReactElement {
    return (
        <StyledContainer>
            <Head>
                <title>Portfolio Julio Schilders</title>
            </Head>
            <h1>hello world!</h1>
        </StyledContainer>
    );
}

const StyledContainer = styled.div`
    height: 100vh;
`;
