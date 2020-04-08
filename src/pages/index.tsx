import React from 'react';
import styled from 'styled-components';
import { spacing, theme, media } from '../util/css-util';
import { NextPage } from 'next';

const Main: NextPage = () => (
    <StyledMain>
        <section>
            <h1>
                Hiya, my name is Julio Schilders! <span> 👋</span>
            </h1>
            <p>
                I&apos;m a software engineer mainly building (web) applications with
                TypeScript, JavaScript and React. I maintain the front-end and dashboard
                of{' '}
                <a href="https://floorplanner.com" rel="noreferrer noopener">
                    Floorplanner
                </a>
                , together with my good friend &amp; teacher{' '}
                <a href="https://sidneyliebrand.io/" rel="noreferrer noopener">
                    Sidney
                </a>
                .
            </p>
        </section>
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
