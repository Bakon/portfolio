import React from 'react';
import styled from 'styled-components';
import { NextPage } from 'next';
import { spacing } from '../util/css-util';

const Main: NextPage = () => (
    <StyledMain>
        <section>
            <h1>Hiya, I&apos;m Julio</h1>
            <h2 className="subheading">Welcome to my little dot on the big internet!</h2>
            <p>
                I&apos;m a software engineer mainly building (web) applications with
                JavaScript, TypeScript, and React. I work at{' '}
                <a href="https://floorplanner.com" rel="noreferrer noopener">
                    Floorplanner
                </a>{' '}
                as a front-end developer, together with my good friend &amp; teacher{' '}
                <a href="https://sidneyliebrand.io/" rel="noreferrer noopener">
                    Sidney
                </a>
                .
            </p>
            <p>
                Writing code has become a passion, there&apos;s always something new to
                learn, another problem to solve. I like to compare it with playing a MMO.
                There are many languages and frameworks to learn (skills to level up), and
                there&apos;s a never ending series of quests to complete (problems to
                solve).
            </p>
            <p>
                In the near future I will make a blog post and upload some (new) projects,
                so make sure to come back soon :D
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
