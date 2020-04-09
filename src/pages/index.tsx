import React from 'react';
import styled from 'styled-components';
import { spacing, theme, media } from '../util/css-util';
import { NextPage } from 'next';

const Main: NextPage = () => (
    <StyledMain>
        <section>
            <h1>Hiya, my name is Julio Schilders!</h1>
            <h2 className="subheading">Welcome to my little corner on the internet.</h2>
            <p>
                This will be the place where I will post a blog post and new projects
                every now and then. It&apos;s looking a bit empty right now, but feel free
                to come back later!
            </p>
        </section>
        <section>
            <h2>About me</h2>
            <p>
                I&apos;m a software engineer mainly building (web) applications with
                TypeScript, JavaScript and React.
            </p>
            <p>
                I maintain the front-end of the website and dashboard of{' '}
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

    section {
        h1 {
            margin: ${spacing.regularMedium} 0;
            font-size: 2rem;
            line-height: 1.3;
        }

        .subheading {
            margin: ${spacing.regularMedium} 0 ${spacing.mediumLarge};
            font-size: 1.4rem;
            line-height: 1.3;
        }
    }

    section + section {
        margin-top: ${spacing.extraLarge};
    }

    p {
        line-height: 1.7;
        margin: 0;
    }
`;
