import React, { ReactElement, Fragment } from 'react';
import App, { AppProps } from 'next/app';
import Stylesheet from '../util/stylesheet';

export default class extends App<AppProps> {
    render(): ReactElement {
        const { Component, pageProps } = this.props;

        return (
            <Fragment>
                <Stylesheet />
                <Component {...pageProps} />;
            </Fragment>
        );
    }
}
