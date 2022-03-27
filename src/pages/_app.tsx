import React, {ReactElement} from 'react';
import styled from 'styled-components';
import {AppProps} from 'next/app';
import {Stylesheet} from '../util/stylesheet';
import Header from '../components/header';
import Footer from '../components/footer';
import {spacing, theme, device} from '../util/css-util';

export default function App({Component, pageProps}: AppProps): ReactElement {
    return (
        <StyledContainer>
            <Stylesheet />
            <Header />
            <Component {...pageProps} />
            <Footer />
        </StyledContainer>
    );
}

const StyledContainer = styled.div`
    display: flex;
    flex-flow: column nowrap;
    height: 100vh;

    background: ${theme.background};

    main {
        flex: 1;
        margin: auto;
        width: 100%;
        max-width: ${spacing.container};
        padding: 0 ${spacing.mediumLarge};
        color: ${theme.text};

        ${device.mobileL} {
            padding: ${spacing.medium};
        }

        section + section {
            margin-top: ${spacing.extraLarge};
        }

        p {
            line-height: 1.7;
            margin: ${spacing.regularMedium} 0;
        }
    }
`;
