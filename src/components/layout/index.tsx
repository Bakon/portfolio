import React, { ReactNodeArray, ReactElement } from 'react';
import styled from 'styled-components';
import Header from './header';
import Footer from './footer';
import Stylesheet from '../../util/stylesheet';
import { theme } from '../../util/css-util';

type Props = {
    children: ReactNodeArray;
};

const Layout = ({ children }: Props): ReactElement => (
    <StyledContainer>
        <Stylesheet />
        <Header />
        {children}
        <Footer />
    </StyledContainer>
);

export default Layout;

const StyledContainer = styled.div`
    display: flex;
    flex-flow: column nowrap;
    height: 100vh;

    background: ${theme.background};
`;
