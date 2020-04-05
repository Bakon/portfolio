import React, {ReactElement} from 'react';
import App, {AppProps} from 'next/app';

export default class NextApp extends App<AppProps> {
    render(): ReactElement {
        const {Component, pageProps} = this.props;

        return <Component {...pageProps} />;
    }
}
