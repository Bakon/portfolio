import React, { ReactElement } from 'react';
import Document, { DocumentContext } from 'next/document';
import App from '../components';

type initialProps = {
    html: string;
    head?: (ReactElement | null)[] | undefined;
    styles?: {} | ReactElement;
};

export default class extends Document {
    static async getInitialProps(ctx: DocumentContext): Promise<initialProps> {
        const initialProps = await Document.getInitialProps(ctx);
        return { ...initialProps };
    }

    render(): ReactElement {
        return <App />;
    }
}
