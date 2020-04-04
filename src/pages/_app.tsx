import React, {ReactElement} from 'react';
import App, {AppProps} from 'next/app';
import '../../public/styles.css';

export default class NextApp extends App<AppProps> {
    render(): ReactElement {
        const {Component, pageProps} = this.props;

        return <Component {...pageProps} />;
    }
}
