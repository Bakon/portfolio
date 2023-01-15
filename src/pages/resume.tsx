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

function makeStringPlural(number: number, string: string): string {
    return number === 1 ? `${number} ${string}` : `${number} ${string}s`;
}

function getElapsedTime(dateFrom: Date, dateTo: Date): string {
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
}

const resumeData = [
    {
        header: '(Programming) languages',
        items: ['JavaScript', 'TypeScript', 'PHP', 'SQL'],
    },
    {
        header: 'Libraries & Frameworks',
        items: ['React', 'Redux', 'Next', 'Laravel'],
    },
    {
        header: 'Other tools',
        items: [
            'Git',
            'Node',
            'NPM',
            'Webpack',
            'Rollup',
            'Gulp',
            'Babel',
            'i18next',
            'Docker',
            'AWS',
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
                <Experience
                    icon="floorplanner"
                    title="Software Engineer"
                    location="Floorplanner, Rotterdam (Full-time)"
                    date="October 2019 - Present"
                    elapsed={getElapsedTime(new Date(2019, 9), new Date())}
                />
                <Experience
                    icon="codecrashers"
                    title="Software Engineer"
                    location="CodeCrashers, Eindhoven (Freelance)"
                    date="January 2022 - January 2023"
                    elapsed={getElapsedTime(
                        new Date(2022, 0),
                        new Date(2023, 0)
                    )}
                />
                <Experience
                    icon="rea"
                    title="Intern supervisor"
                    location="REA College Eindhoven, Eindhoven (Freelance)"
                    date="October 2022 - December 2022"
                    elapsed={getElapsedTime(
                        new Date(2022, 9),
                        new Date(2022, 11)
                    )}
                />
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

function Experience({
    icon,
    title,
    location,
    date,
    elapsed,
}: {
    icon: string;
    title: string;
    location: string;
    date: string;
    elapsed: string;
}): ReactElement {
    return (
        <div className="company">
            <SVG icon={icon} />
            <div className="company-details">
                <span className="title">{title}</span>
                <span className="location">{location}</span>
                <span className="date">
                    <span>{date}</span>
                    <span>({elapsed})</span>
                </span>
            </div>
        </div>
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
        margin: 1rem 0 2rem;
        display: flex;
        flex-flow: row nowrap;
        align-items: center;

        &-details {
            display: flex;
            flex-flow: column wrap;
            align-items: flex-start;
            margin-left: 1rem;
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
            margin-left: 0.25rem;
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
