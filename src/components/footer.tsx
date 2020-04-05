import React, {ReactElement} from 'react';
import styled from 'styled-components';
import {spacing, media, theme} from '../css-util';

type Props = {
    className?: string;
};

export default function Footer({className}: Props): ReactElement {
    return (
        <StyledFooter className={className}>
            <h1>I am foot</h1>
        </StyledFooter>
    );
}

const StyledFooter = styled.footer`
    color: ${theme.text};
    padding: ${spacing.large};
    margin: auto;
    width: 100%;
    max-width: ${spacing.container};

    ${media.mobileL} {
        padding: ${spacing.medium};
    }
`;
