import React, { ReactElement } from 'react';
import styled from 'styled-components';
import SVG from './svg';
import { spacing, colors, theme } from '../util/css-util';

const Footer = ({ className }: { className?: string }): ReactElement => (
    <StyledFooter className={className}>
        <span>&copy; Julio Schilders</span>
        <a href="https://github.com/Julicolo" aria-label="View GitHub profile">
            <SVG icon="github" />
        </a>
    </StyledFooter>
);

export default Footer;

const StyledFooter = styled.footer`
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    justify-content: space-between;
    margin: 0 auto;
    width: 100%;
    max-width: ${spacing.container};
    padding: ${spacing.regular} ${spacing.mediumLarge};

    color: ${theme.text};

    svg {
        width: ${spacing.mediumExtraLarge};
        height: ${spacing.mediumExtraLarge};

        &.github {
            border-radius: 50%;
            background: radial-gradient(${colors.white} 62%, ${colors.black} 69%);
        }
    }

    a + a {
        margin-left: ${spacing.large};
    }
`;
