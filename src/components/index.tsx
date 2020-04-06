import React, { ReactNodeArray, ReactElement } from 'react';
import styled from 'styled-components';
import { theme } from '../util/css-util';
import Header from './header';
// import Footer from './footer';

const Layout = ({ children }: { children: ReactNodeArray }): ReactElement => (
    <StyledContainer>
        <Header />
        {children}
        {/* <Footer /> */}
    </StyledContainer>
);

export default Layout;

const StyledContainer = styled.div`
    display: flex;
    flex-flow: column nowrap;
    height: 100vh;

    background: ${theme.background};
`;
