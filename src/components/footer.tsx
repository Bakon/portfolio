import React, {ReactElement} from 'react';
import styled from 'styled-components';

type Props = {
    className: string;
};

export default function Footer({className}: Props): ReactElement {
    return (
        <StyledFooter className={className}>
            <h1>Footer content</h1>
        </StyledFooter>
    );
}

const StyledFooter = styled.footer`
    color: ${({theme}): string => theme.color};
`;
