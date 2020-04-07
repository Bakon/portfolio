import React, { ReactElement } from 'react';
import Document, {
    Html,
    Head,
    Main,
    NextScript,
    DocumentContext,
    DocumentInitialProps,
} from 'next/document';
import { ServerStyleSheet } from 'styled-components';
import ThemeScript from '../util/theme-script';

type Props = {};

export default class extends Document {
    static async getInitialProps(ctx: DocumentContext): Promise<DocumentInitialProps> {
        const stylesheet = new ServerStyleSheet();
        const originalRenderPage = ctx.renderPage;

        try {
            ctx.renderPage = (): ReturnType<typeof ctx.renderPage> =>
                originalRenderPage({
                    enhanceApp: (App) => (props): ReactElement =>
                        stylesheet.collectStyles(<App {...props} />),
                });

            const initialProps = await Document.getInitialProps(ctx);
            return {
                ...initialProps,
                styles: [initialProps.styles, stylesheet.getStyleElement()],
            };
        } finally {
            stylesheet.seal();
        }
    }

    render(): ReactElement {
        return (
            <Html lang="en">
                <link rel="canonical" href="https://jschilders.com" />
                <link
                    rel="shortcut icon"
                    type="image/x-icon"
                    href="assets/icons/favicon.ico"
                />
                <meta
                    name="description"
                    content="Portfolio Julio Schilders, Javascript developer"
                />
                <meta name="author" content="Julio Schilders" />
                <Head />
                <body>
                    <ThemeScript />
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}
