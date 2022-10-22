import React, {ReactElement} from 'react';
import styled from 'styled-components';
import {NextPage} from 'next';
import Head from 'next/head';
import {spacing} from '../util/css-util';

export default function Main(): ReactElement<NextPage> {
    return (
        <StyledMain>
            <Head>
                <title>Julio Schilders | About me</title>
                <link rel="canonical" href="https://jschilders.dev" />
            </Head>
            <section>
                <h1>Hiya, I&apos;m Julio Schilders 👋</h1>
                <h2 className="subheading">
                    Welcome to my little dot on the internet!
                </h2>
                <p>
                    I&apos;m a social and passionate software engineer
                    that&apos;s not afraid to ask questions. <br />
                    My strongest programming language is JavaScript, I&apos;m
                    most knowledgeable in React.
                </p>
                <p>
                    I enjoy the fun little challenges that come with software
                    engineering.
                    <br /> There&apos;s always something new to learn, things to
                    improve at, and problems to solve.
                </p>
                <p>
                    I&apos;m currently employed full-time at{' '}
                    <a
                        href="https://floorplanner.com"
                        rel="noreferrer noopener"
                    >
                        Floorplanner
                    </a>{' '}
                    together with my long-term friend &amp; mentor{' '}
                    <a
                        href="https://sidneyliebrand.io/"
                        rel="noreferrer noopener"
                    >
                        Sidney
                    </a>
                    .{' '}
                    <a
                        href="https://floorplanner.com"
                        rel="noreferrer noopener"
                    >
                        Floorplanner
                    </a>{' '}
                    is an architectural visualisation tool, which let&apos;s you
                    draw beautiful 2D &amp; 3D floorplans. <br />
                    And it&apos;s all in the browser! Pretty cool right?
                </p>
                <p>
                    Sometimes I also do some freelance work for CodeCrashers,
                    which is a platform where schools will be able to purchase a
                    license to view courses and assignments.
                </p>
                <p>
                    My tiny website is quite empty as you can see, but if
                    you&apos;re looking for some more fun stuff to read, make
                    sure to check out{' '}
                    <a
                        href="https://sidneyliebrand.io/"
                        rel="noreferrer noopener"
                    >
                        Sidney
                    </a>
                    &apos;s blog. He occasionally writes fun and informative
                    blog posts, where he shares some of his experience and
                    knowledge.
                </p>
            </section>
        </StyledMain>
    );
}

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
