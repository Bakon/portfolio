import React, {ReactElement} from 'react';
import styled from 'styled-components';
import {colors} from '../css-util';

export default function Header(): ReactElement {
    return (
        <StyledHeader>
            <span>Julio Schilders</span>
            <span>About me</span>
            <span>Projects</span>
            <span>Contact</span>
            <span>turn off the lights</span>
        </StyledHeader>
    );
}

const StyledHeader = styled.div`
    background: ${colors.dark};
`;
