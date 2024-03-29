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
import {ThemeScript} from '../util/toggle-script';

export default class extends Document {
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
                    content="Hiya, I'm Julio Schilders 👋  Welcome to my little dot on the internet! I'm a social and passionate software engineer that's not afraid to ask questions. My strongest programming language is JavaScript, I'm most knowledgeable in React."
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

    static async getInitialProps(
        ctx: DocumentContext
    ): Promise<DocumentInitialProps> {
        const stylesheet = new ServerStyleSheet();
        const originalRenderPage = ctx.renderPage;

        try {
            ctx.renderPage = (): ReturnType<typeof ctx.renderPage> => {
                return originalRenderPage({
                    enhanceApp:
                        (App) =>
                        (props): ReactElement => {
                            return stylesheet.collectStyles(<App {...props} />);
                        },
                });
            };

            const initialProps = await Document.getInitialProps(ctx);

            return {
                ...initialProps,
                styles: (
                    <>
                        {initialProps.styles}
                        {stylesheet.getStyleElement()}
                    </>
                ),
            };
        } finally {
            stylesheet.seal();
        }
    }
}
