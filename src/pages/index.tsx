import React, {ReactElement} from 'react';
import styled from 'styled-components';
import Header from '../components/header';
import Main from '../components/main';
// import Footer from '../components/footer';
import GlobalStyle from '../components/global-styles';
import {theme} from '../css-util';

export default function Index(): ReactElement {
    return (
        <React.Fragment>
            <GlobalStyle />
            <StyledContainer>
                <Header />
                <Main />
                {/* <Footer /> */}
            </StyledContainer>
        </React.Fragment>
    );
}

const StyledContainer = styled.div`
    display: flex;
    flex-flow: column nowrap;
    height: 100vh;
    background: ${theme.background};
`;
