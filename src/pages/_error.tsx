import React, {Component, ReactElement, Fragment} from 'react';
import styled from 'styled-components';
import {NextPageContext} from 'next';
import Head from 'next/head';

interface ErrorProps {
    title: string;
    errorCode?: number;
}

export default class Error extends Component<ErrorProps> {
    static async getInitialProps({res}: NextPageContext): Promise<ErrorProps> {
        return {
            title: `Error: ${res && res.statusCode}`,
            errorCode: res && res.statusCode,
        };
    }

    render(): ReactElement {
        const {title, errorCode} = this.props;
        return (
            <Fragment>
                <Head>
                    <title>{title}</title>
                </Head>
                <StyledError>
                    <h1>{errorCode}</h1>
                </StyledError>
            </Fragment>
        );
    }
}

const StyledError = styled.div`
    margin: auto;
`;
