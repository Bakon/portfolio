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
        header: 'Programming languages',
        items: [
            'JavaScript',
            'TypeScript',
            'Python',
            'PHP',
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
            'Next',
            'Express',
            'Electron',
            'Angular',
            'jQuery',
            'Django',
        ],
    },
    {
        header: 'Tools',
        items: [
            'Git',
            'Docker',
            'AWS',
            'Node',
            'i18next',
            'Webpack',
            'Babel',
            'Rollup',
            'Gulp',
            'Flow',
            'Flask',
            'CSS Modules',
            'Styled-components',
            'Sass',
            'Pug',
        ],
    },
];

const Resume: NextPage = () => (
    <StyledResume>
        <Head>
            <title>Julio Schilders | Resume</title>
            <link rel="canonical" href="https://jschilders.dev/resume" />
        </Head>
        <section>
            {icons.map(
                ({url, logo, label}: {[key: string]: string}): ReactElement => (
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
                <div className="company--logo">
                    <SVG icon="fpLogo" />
                    <h4>Floorplanner - Software engineer</h4>
                </div>
                <div className="date">
                    <span>October 2019 - Present</span>
                    <span>
                        ({getElapsedTime(new Date(2019, 9), new Date())})
                    </span>
                </div>
            </div>
            <div className="company">
                <div className="company--logo">
                    <h4>Codecrashers - Freelance Software engineer</h4>
                </div>
                <div className="date">
                    <span>January 2022 - Present</span>
                    <span>
                        ({getElapsedTime(new Date(2022, 0), new Date())})
                    </span>
                </div>
            </div>
        </section>
        <section className="experience">
            <h2 className="header">Education</h2>
            <div className="company">
                <div className="company--logo">
                    <img
                        src="/images/rea-logo.png"
                        alt="logo REA"
                        className="rea"
                    />
                    <h4>REA - Web development</h4>
                </div>
                <span>2018 - 2020</span>
            </div>
            <div className="company">
                <div className="company--logo">
                    <img
                        src="/images/curio-logo.jpeg"
                        alt="logo Curio"
                        className="curio"
                    />
                    <h4>Curio - Software development</h4>
                </div>
                <span>2015 - 2018</span>
            </div>
        </section>
        <section>
            <a href="/assets/resume.pdf" download="resume-julio-schilders.pdf">
                <button className="download">Download as PDF</button>
            </a>
        </section>
    </StyledResume>
);

export default Resume;

const StyledResume = styled.main`
    a + a {
        margin-left: ${spacing.large};
    }

    section {
        .header {
            color: ${colors.blue};
        }

        &.experience {
            h2 {
                margin-bottom: ${spacing.small};
            }

            .elapsed-time {
                color: gray;
            }
        }
    }

    .personalia {
        display: flex;
        flex-flow: column nowrap;
        margin-top: ${spacing.medium};

        span {
            margin: ${spacing.small} 0;
        }
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
            border: 2px solid;

            &.rea {
                border-color: ${colors.reaGreen};
            }

            &.curio {
                border-color: ${colors.black};
            }
        }
    }

    .date {
        display: flex;
        flex-flow: row wrap;

        span {
            margin: ${spacing.small} 0;

            &:first-child {
                margin-right: ${spacing.regular};
            }

            &:last-child {
                color: ${colors.gray};
            }
        }

        ${device.mobileL} {
            flex-flow: column nowrap;
        }
    }

    svg {
        width: ${spacing.mediumExtraLarge};
        height: ${spacing.mediumExtraLarge};

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

        &.fpLogo {
            margin-right: ${spacing.medium};
        }
    }

    .download {
        border: 2px solid ${colors.blue};
        border-radius: 4px;
        color: ${colors.blue};
        background: ${colors.white};
        font-size: 1rem;
        padding: ${spacing.regular} ${spacing.regularMedium};
        user-select: none;
        outline: none;
    }
`;
