import React, { ReactElement } from 'react';
import App, { AppContext } from 'next/app';

export default class extends App {
    static async getInitialProps({
        Component,
        ctx,
    }: AppContext): Promise<{ pageProps: {} }> {
        let pageProps = {};

        if (Component.getInitialProps) {
            pageProps = await Component.getInitialProps(ctx);
        }

        return { pageProps };
    }

    render(): ReactElement {
        const { Component, pageProps } = this.props;
        return <Component {...pageProps} />;
    }
}
