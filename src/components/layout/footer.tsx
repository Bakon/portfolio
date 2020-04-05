import React, { ReactElement } from 'react';
import styled from 'styled-components';
import { spacing, media, theme } from '../../util/css-util';

type Props = {
    className?: string;
};

const Footer = ({ className }: Props): ReactElement => (
    <StyledFooter className={className}>
        <h1>I am foot</h1>
    </StyledFooter>
);

export default Footer;

const StyledFooter = styled.footer`
    margin: 0 auto;
    width: 100%;
    max-width: ${spacing.container};
    padding: 0 ${spacing.large};

    color: ${theme.text};

    ${media.mobileL} {
        padding: 0 ${spacing.medium};
    }
`;
