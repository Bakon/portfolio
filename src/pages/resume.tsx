import React, { ReactElement } from 'react';
import styled from 'styled-components';
import { NextPage } from 'next';
import SVG from '../components/svg';
import { spacing, colors } from '../util/css-util';

const icons = [
    { url: 'https://linkedin.com/in/julioschilders/', name: 'linkedin' },
    { url: 'mailto:julioschilders@gmail.com?subject=Mail from portfolio', name: 'gmail' },
    { url: 'https://stackoverflow.com/users/story/11355018', name: 'stackoverflow' },
];

const Resume: NextPage = () => (
    <StyledResume>
        <section>
            {icons.map(
                ({ url, name }: { [key: string]: string }): ReactElement => (
                    <a href={url} key={name} rel="noreferrer noopener" target="_blank">
                        <SVG icon={name} />
                    </a>
                )
            )}
            <div className="personalia">
                <span>Julio Schilders</span>
                <span>Software Engineer</span>
                <span>Breda, Netherlands</span>
            </div>
        </section>
        <section>
            <h2>Languages</h2>
            <div className="row">
                <span>JavaScript</span>
                <span>TypeScript</span>
                <span>PHP</span>
                <span>Python</span>
                <span>CSS</span>
                <span>HTML</span>
                <span>SQL</span>
            </div>
        </section>
        <section>
            <h2>Frameworks &amp; tools</h2>
            <div className="row">
                <span>React</span>
                <span>Next</span>
                <span>Express</span>
                <span>Electron</span>
                <span>Pug</span>
                <span>jQuery</span>
            </div>
        </section>
        <section>
            <h2>Miscellaneous</h2>
            <div className="row">
                <span>Git</span>
                <span>Node</span>
                <span>Sass</span>
                <span>Flow</span>
                <span>Webpack</span>
                <span>React-router</span>
                <span>Styled-components</span>
            </div>
        </section>
        <section className="experience">
            <h2>Experience</h2>
            <div className="company">
                <div className="company--logo">
                    <SVG icon="fpLogo" />
                    <h4>Floorplanner - Front-end developer</h4>
                </div>
                <span>October 2019 - Present</span>
            </div>
        </section>
        <section className="experience">
            <h2>Education</h2>
            <div className="company">
                <div className="company--logo">
                    <img src="/images/rea-logo.png" />
                    <h4>REA - Web development</h4>
                </div>
                <span>September 2018 - April 2020</span>
            </div>
            <div className="company">
                <div className="company--logo">
                    <img src="/images/curio-logo.png" />
                    <h4>Curio - Software development</h4>
                </div>
                <span>September 2016 - September 2017</span>
            </div>
        </section>
    </StyledResume>
);

export default Resume;

const StyledResume = styled.main`
    a + a {
        margin-left: ${spacing.large};
    }

    .personalia {
        display: flex;
        flex-flow: column nowrap;
        margin-top: ${spacing.medium};
    }

    .row {
        display: flex;
        flex-flow: row wrap;

        span {
            margin-right: ${spacing.medium};
            line-height: 1.5;
        }
    }

    .company {
        margin-bottom: ${spacing.medium};

        &--logo {
            display: flex;
            flex-flow: row wrap;
            align-items: center;
        }

        img {
            border-radius: 50%;
            max-width: 35px;
            margin-right: ${spacing.medium};
        }
    }

    .experience {
        h2 {
            margin-bottom: ${spacing.small};
        }
    }

    svg {
        width: ${spacing.mediumExtraLarge};
        height: ${spacing.mediumExtraLarge};

        &.github {
            border-radius: 50%;
            background: radial-gradient(${colors.white} 62%, ${colors.black} 69%);
        }

        &.linkedin {
            border-radius: 4px;
            background: ${colors.white};
            background: radial-gradient(${colors.white} 60%, transparent);
        }

        &.fpLogo {
            margin-right: ${spacing.medium};
        }
    }
`;
