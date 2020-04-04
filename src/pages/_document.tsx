import React, {ReactElement} from 'react';
import {ServerStyleSheet} from 'styled-components';
import Document, {Head, Main, NextScript} from 'next/document';

type initialProps = {
    styles: ReactElement;
    html: string;
    head?: (ReactElement | null)[] | undefined;
};

type Props = {
    styleTags: Array<React.ReactElement<{}>>;
};

export default class MyDocument extends Document<Props> {
    static async getInitialProps({renderPage}): Promise<initialProps> {
        const sheet = new ServerStyleSheet();
        const page = renderPage((App) => (props): ReactElement =>
            sheet.collectStyles(<App {...props} />)
        );

        const styleTags = sheet.getStyleElement();
        return {...page, styleTags};
    }

    render(): ReactElement {
        const {styleTags} = this.props;

        return (
            <html lang="en">
                <meta charSet="UTF-8" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1, shrink-to-fit=no"
                />
                <meta name="author" content="Julio Schilders" />
                <meta
                    name="description"
                    content="Portfolio Julio Schilders, Javascript developer"
                />
                <link rel="canonical" href="https://jschilders.com" />
                <link
                    rel="shortcut icon"
                    type="image/x-icon"
                    href="assets/icons/favicon.ico"
                />
                <link
                    href="https://fonts.googleapis.com/css2?family=Roboto&display=swap"
                    rel="stylesheet"
                />
                <Head>{styleTags}</Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </html>
        );
    }
}
