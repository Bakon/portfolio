import React, {ReactElement} from 'react';
import styled from 'styled-components';
import {NextPage} from 'next';
import Head from 'next/head';
import SVG from '../components/svg';
import {spacing, colors, device} from '../util/css-util';

const icons = [
    {
        url: 'https://linkedin.com/in/julioschilders/',
        logo: 'linkedin',
        label: 'View LinkedIn profile',
    },
    {
        url: 'https://github.com/bakon',
        logo: 'github',
        label: 'View GitHub profile',
    },
    {
        url: 'mailto:julioschilders@gmail.com?subject=Mail from portfolio',
        logo: 'gmail',
        label: 'Send email',
    },
];

const makeStringPlural = (number: number, string: string): string => {
    return number === 1 ? `${number} ${string}` : `${number} ${string}s`;
};

const getElapsedTime = (dateFrom: Date, dateTo: Date): string => {
    const totalMonths =
        dateTo.getMonth() -
        dateFrom.getMonth() +
        12 * (dateTo.getFullYear() - dateFrom.getFullYear());

    const years = Math.floor(totalMonths / 12);
    const months = (totalMonths % 12) + 1;
    const formattedYears = makeStringPlural(years, 'year');
    const formattedMonths = makeStringPlural(months, 'month');

    if (years && months) return `${formattedYears} - ${formattedMonths}`;
    if (years) return formattedYears;

    return formattedMonths;
};

const resumeData = [
    {
        header: '(Programming) languages',
        items: [
            'JavaScript',
            'TypeScript',
            'PHP',
            'Python',
            'SQL',
            'XML',
            'HTML',
            'CSS',
        ],
    },
    {
        header: 'Libraries & Frameworks',
        items: [
            'React',
            'Redux',
            'Electron',
            'Next',
            'Express',
            'Angular',
            'jQuery',
            'Laravel',
            'Django',
        ],
    },
    {
        header: 'Other tools',
        items: [
            'Git',
            'Node',
            'NPM',
            'Yarn',
            'Lerna',
            'Webpack',
            'Rollup',
            'Gulp',
            'Pug',
            'Babel',
            'i18next',
            'Docker',
            'AWS',
            'WordPress',
            'MySQL',
            'Sass',
            'CSS-Modules',
            'Styled-components',
        ],
    },
];

export default function Resume(): ReactElement<NextPage> {
    return (
        <StyledResume>
            <Head>
                <title>Julio Schilders | Resume</title>
                <link rel="canonical" href="https://jschilders.dev/resume" />
            </Head>
            <section>
                {icons.map(({url, logo, label}) => (
                    <a
                        key={logo}
                        href={url}
                        rel="noreferrer noopener"
                        target="_blank"
                        aria-label={label}
                    >
                        <SVG icon={logo} />
                    </a>
                ))}
                <div className="personalia">
                    <span>Julio Schilders</span>
                    <span>Software Engineer</span>
                    <span>Eindhoven, Netherlands</span>
                </div>
            </section>
            {resumeData.map(({header, items}) => (
                <section key={header}>
                    <h2 className="header">{header}</h2>
                    <div className="row">
                        {items.map((language) => (
                            <span key={language}>{language}</span>
                        ))}
                    </div>
                </section>
            ))}
            <section className="experience">
                <h2 className="header">Experience</h2>
                <div className="company">
                    <SVG icon="floorplanner" />
                    <div className="company-details">
                        <span className="title">Front-end Engineer</span>
                        <span className="location">
                            Floorplanner, Rotterdam (Full-time)
                        </span>
                        <span className="date">
                            <span>October 2019 - Present</span>
                            <span>
                                ({getElapsedTime(new Date(2019, 9), new Date())}
                                )
                            </span>
                        </span>
                    </div>
                </div>
                <div className="company">
                    <SVG icon="codecrashers" />
                    <div className="company-details">
                        <span className="title">Lead Front-end Engineer</span>
                        <span className="location">
                            CodeCrashers, Eindhoven (Freelance)
                        </span>
                        <span className="date">
                            <span>January 2022 - Present</span>
                            <span>
                                ({getElapsedTime(new Date(2022, 0), new Date())}
                                )
                            </span>
                        </span>
                    </div>
                </div>
            </section>
            <section className="experience">
                <h2 className="header">Education</h2>
                <div className="company">
                    <SVG icon="curio" />
                    <div className="company-details">
                        <span className="title">Software development</span>
                        <span className="location">Curio, Breda</span>
                        <span className="date">August 2015 - July 2017</span>
                    </div>
                </div>
                <div className="company">
                    <SVG icon="rea" />
                    <div className="company-details">
                        <span className="title">Web development</span>
                        <span className="location">REA, Eindhoven</span>
                        <span className="date">February 2018 - July 2020</span>
                    </div>
                </div>
            </section>
            <section>
                <a
                    href="/assets/resume-julio-schilders.pdf"
                    download="resume-julio-schilders.pdf"
                >
                    <button className="download">Download resume</button>
                </a>
            </section>
        </StyledResume>
    );
}

const StyledResume = styled.main`
    a + a {
        margin-left: ${spacing.mediumLarge};
    }

    span {
        line-height: 1.4;
    }

    section {
        .header {
            color: ${colors.blue};
            margin-bottom: 0.75rem;
        }

        &.experience .elapsed-time {
            color: gray;
        }
    }

    .personalia {
        display: flex;
        flex-flow: column nowrap;
        margin-top: ${spacing.regular};

        span {
            line-height: 1.6;
        }
    }

    .row {
        display: flex;
        flex-flow: row wrap;

        span {
            margin-right: ${spacing.medium};
            line-height: 1.6;
        }
    }

    .company {
        margin: 1rem 0 1.5rem;
        display: flex;
        flex-flow: row nowrap;
        align-items: center;

        &-details {
            display: flex;
            flex-flow: column wrap;
            align-items: flex-start;
            margin-left: ${spacing.medium};
        }

        .title {
            font-size: 1.3rem;
            line-height: 1.3;
        }

        .location {
            font-size: 1rem;
        }

        .date {
            font-size: 0.9rem;
            display: flex;
            flex-flow: row wrap;
            color: #bebebe;

            ${device.mobileL} {
                flex-flow: column nowrap;
            }

            span {
                color: #bebebe;
            }

            span:first-child {
                margin-right: ${spacing.small};
            }
        }

        svg {
            width: 3.5rem;
            height: 3.5rem;
        }

        img {
            border-radius: 50%;
            margin-right: ${spacing.medium};
            width: 52px;
            height: 52px;
            min-width: 52px;
            min-height: 52px;
        }
    }

    svg {
        width: ${spacing.mediumLarge};
        height: ${spacing.mediumLarge};

        &.github {
            border-radius: 50%;
            background: radial-gradient(
                ${colors.white} 62%,
                ${colors.black} 69%
            );
        }

        &.linkedin {
            border-radius: 4px;
            background: ${colors.white};
            background: radial-gradient(${colors.white} 60%, transparent);
        }

        &.floorplanner,
        &.codecrashers {
        }
    }

    .download {
        border: none;
        border-radius: 4px;
        color: ${colors.white};
        background: rgb(255, 143, 0);
        font-size: 1.1rem;
        padding: ${spacing.regular} ${spacing.regularMedium};
        user-select: none;
        outline: none;
        cursor: pointer;
        background: orange;
        min-height: 2.5rem;
    }
`;
