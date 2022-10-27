import React, {ReactElement} from 'react';
import styled from 'styled-components';
import SVG from './svg';
import {spacing, colors, theme, multiply} from '../util/css-util';

export default function Footer({
    className,
}: {
    className?: string;
}): ReactElement {
    return (
        <StyledFooter className={className}>
            <span>&copy; Julio Schilders</span>
            <a href="https://github.com/Bakon" aria-label="View GitHub profile">
                <SVG icon="github" />
            </a>
        </StyledFooter>
    );
}

const StyledFooter = styled.footer`
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    margin: 0 auto;
    margin-top: ${spacing.mediumLarge};
    max-width: ${spacing.container};
    padding: ${spacing.regular} ${spacing.mediumLarge};
    min-height: ${multiply(spacing.medium, 3)};

    border-top: 1px solid ${theme.seperator};
    color: ${theme.text};

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
    }

    a + a {
        margin-left: ${spacing.large};
    }

    span {
        width: 100%;
        text-align: center;
    }
`;
