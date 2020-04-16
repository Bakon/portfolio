import React, { ReactElement } from 'react';
import styled from 'styled-components';
import { NextPage } from 'next';
import Head from 'next/head';
import SVG from '../components/svg';
import { spacing, colors } from '../util/css-util';

const icons = [
    {
        url: 'https://linkedin.com/in/julioschilders/',
        logo: 'linkedin',
        label: 'View LinkedIn profile',
    },
    {
        url: 'mailto:julioschilders@gmail.com?subject=Mail from portfolio',
        logo: 'gmail',
        label: 'Send email',
    },
    {
        url: 'https://stackoverflow.com/users/story/11355018',
        logo: 'stackoverflow',
        label: 'View Stackoverflow profile',
    },
];

const makeStringPlural = (number: number, string: string): string => {
    if (number === 1) {
        return number + ' ' + string;
    } else if (number > 1) {
        return number + ' ' + string + 's';
    } else {
        return '';
    }
};

const getElapsedTime = (dateFrom: Date, dateTo: Date): string => {
    const totalMonths =
        dateTo.getMonth() -
        dateFrom.getMonth() +
        12 * (dateTo.getFullYear() - dateFrom.getFullYear());

    const years = Math.floor(totalMonths / 12);
    const months = totalMonths % 12;
    const formattedYears = makeStringPlural(years, 'year');
    const formattedMonths = makeStringPlural(months, 'month');

    if (formattedYears && formattedMonths) {
        return formattedYears + ' - ' + formattedMonths;
    } else if (formattedYears) {
        return formattedYears;
    } else {
        return formattedMonths;
    }
};

const Resume: NextPage = () => (
    <StyledResume>
        <Head>
            <title>Julio Schilders | Resume</title>
            <link rel="canonical" href="https://jschilders.dev/resume" />
        </Head>
        <section>
            {icons.map(
                ({ url, logo, label }: { [key: string]: string }): ReactElement => (
                    <a
                        key={logo}
                        href={url}
                        rel="noreferrer noopener"
                        target="_blank"
                        aria-label={label}
                    >
                        <SVG icon={logo} />
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
                <span>
                    October 2019 - Present (
                    {getElapsedTime(new Date(2019, 9), new Date())})
                </span>
            </div>
        </section>
        <section className="experience">
            <h2>Education</h2>
            <div className="company">
                <div className="company--logo">
                    <img src="/images/rea-logo.png" alt="logo REA" />
                    <h4>REA - Web development</h4>
                </div>
                <span>
                    September 2018 - April 2020 (
                    {getElapsedTime(new Date(2018, 7), new Date(2020, 3))})
                </span>
            </div>
            <div className="company">
                <div className="company--logo">
                    <img src="/images/curio-logo.jpeg" alt="logo Curio" />
                    <h4>Curio - Software development</h4>
                </div>
                <span>
                    September 2016 - September 2017 (
                    {getElapsedTime(new Date(2016, 7), new Date(2017, 8))})
                </span>
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
        display: flex;
        flex-flow: column nowrap;

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
