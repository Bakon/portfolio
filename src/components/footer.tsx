import React, {ReactElement} from 'react';
import styled from 'styled-components';
import {colors} from '../css-util';

export default function Footer(): ReactElement {
    return (
        <StyledFooter>
            <h1>hello world!</h1>
        </StyledFooter>
    );
}

const StyledFooter = styled.div`
    background: ${colors.light};
`;
