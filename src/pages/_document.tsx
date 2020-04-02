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
        return (
            <html>
                <Head>{this.props.styleTags}</Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </html>
        );
    }
}
