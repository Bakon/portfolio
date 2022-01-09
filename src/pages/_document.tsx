import React, {ReactElement} from 'react';
import Document, {
    Html,
    Head,
    Main,
    NextScript,
    DocumentContext,
    DocumentInitialProps,
} from 'next/document';
import {ServerStyleSheet} from 'styled-components';
import ThemeScript from '../util/toggle-script';

export default class extends Document {
    static async getInitialProps(
        ctx: DocumentContext
    ): Promise<DocumentInitialProps> {
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
                <link
                    rel="shortcut icon"
                    type="image/x-icon"
                    href="assets/icons/favicon.ico"
                />
                <meta
                    name="description"
                    content="I'm Julio Schilders, a software engineer, mainly building (web) applications with TypeScript, JavaScript and React."
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
