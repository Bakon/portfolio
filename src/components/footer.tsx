import React, {ReactElement} from 'react';
import styled from 'styled-components';
import {spacing, media} from '../css-util';

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
    color: ${({theme}): string => theme.color};
    padding: ${spacing.large};
    margin: auto;
    width: 100%;
    max-width: ${spacing.container};

    ${media.mobileL} {
        padding: ${spacing.medium};
    }
`;
