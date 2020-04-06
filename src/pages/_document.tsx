import React, { ReactElement, ReactNodeArray } from 'react';
import Document, { Head, Main, NextScript, DocumentInitialProps } from 'next/document';
import { ServerStyleSheet } from 'styled-components';
import ThemeScript from '../util/theme-script';

export default class extends Document<{ stylesheet: ReactNodeArray }> {
    static async getInitialProps({ renderPage }): Promise<DocumentInitialProps> {
        const sheet = new ServerStyleSheet();
        const page = renderPage((App) => (props: ReactElement): ReactElement =>
            sheet.collectStyles(<App {...props} />)
        );

        const stylesheet = sheet.getStyleElement();

        return { ...page, stylesheet };
    }

    render(): ReactElement {
        const { stylesheet } = this.props;

        return (
            <html lang="en">
                <link
                    rel="shortcut icon"
                    type="image/x-icon"
                    href="assets/icons/favicon.ico"
                />
                <link rel="canonical" href="https://jschilders.com" />
                <meta name="author" content="Julio Schilders" />
                <meta
                    name="description"
                    content="Portfolio Julio Schilders, Javascript developer"
                />
                {stylesheet}
                <Head />
                <body>
                    <ThemeScript />
                    <Main />
                    <NextScript />
                </body>
            </html>
        );
    }
}
