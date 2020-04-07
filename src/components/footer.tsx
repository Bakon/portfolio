import React, { ReactElement } from 'react';
import styled from 'styled-components';
import SVG from './svg';
import { spacing, colors, media, theme } from '../util/css-util';

const icons = [
    { url: 'https://github.com/Julicolo', name: 'github' },
    { url: 'https://stackoverflow.com/users/story/11355018', name: 'stackoverflow' },
    { url: 'https://linkedin.com/in/julioschilders/', name: 'linkedin' },
    { url: 'mailto:julioschilders@gmail.com?subject=Mail from portfolio', name: 'gmail' },
];

const Footer = ({ className }: { className?: string }): ReactElement => (
    <StyledFooter className={className}>
        {icons.map(
            ({ url, name }: { [key: string]: string }): ReactElement => (
                <a href={url} key={name} rel="noreferrer noopener" target="_blank">
                    <SVG icon={name} />
                </a>
            )
        )}
    </StyledFooter>
);

export default Footer;

const StyledFooter = styled.footer`
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    justify-content: space-between;
    justify-content: space-evenly;
    margin: 0 auto;
    width: 100%;
    max-width: ${spacing.container};
    padding: ${spacing.medium} ${spacing.large};

    color: ${theme.text};

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
    }

    ${media.mobileL} {
        padding: ${spacing.medium} ${spacing.medium};
    }
`;
