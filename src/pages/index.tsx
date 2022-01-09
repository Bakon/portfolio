import React from 'react';
import styled from 'styled-components';
import {NextPage} from 'next';
import Head from 'next/head';
import {spacing} from '../util/css-util';

const Main: NextPage = () => (
    <StyledMain>
        <Head>
            <title>Julio Schilders | About me</title>
            <link rel="canonical" href="https://jschilders.dev" />
        </Head>
        <section>
            <h1>Hiya, I&apos;m Julio</h1>
            <h2 className="subheading">
                Welcome to my little dot on the big internet!
            </h2>
            <p>
                I&apos;m a social and passionate software engineer that&apos;s
                not afraid to ask questions. My strongest programming language
                is JavaScript and I&apos;m most knowledgeable in React.
            </p>
            <p>
                I enjoy the challenges that come with programming. There&apos;s
                always something new to learn, many things to improve at, and
                even more problems to solve
            </p>
            <p>
                I&apos;m currently employed at{' '}
                <a href="https://floorplanner.com" rel="noreferrer noopener">
                    Floorplanner
                </a>{' '}
                as a front-end developer, together with my good friend &amp;
                teacher{' '}
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
    h1 {
        margin-top: 0;
        margin-bottom: ${spacing.regularMedium};
        font-size: 2rem;
        line-height: 1.3;
    }

    .subheading {
        font-size: 1.4rem;
        line-height: 1.3;
    }
`;
