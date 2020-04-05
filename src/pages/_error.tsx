import React, { Component, ReactElement, Fragment } from 'react';
import { NextPageContext } from 'next';
import Head from 'next/head';

type ExNextPageContext = NextPageContext & {
    req?: Express.Request;
    res?: Express.Response;
};

type Props = {
    title: string;
    errorCode?: number;
};

export default class Error extends Component<Props> {
    static async getInitialProps({ res }: ExNextPageContext): Promise<Props> {
        return {
            title: `Error: ${res && res.statusCode}`,
            errorCode: res && res.statusCode,
        };
    }

    render(): ReactElement {
        const { title, errorCode } = this.props;
        return (
            <Fragment>
                <Head>
                    <title>{title}</title>
                </Head>
                {errorCode}
            </Fragment>
        );
    }
}
