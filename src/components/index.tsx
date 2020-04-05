import React from 'react';
import { NextComponentType } from 'next';
import { Head, Main, NextScript } from 'next/document';
import ThemeScript from '../util/theme-script';

const Layout: NextComponentType = () => (
    <html lang="en">
        <link rel="shortcut icon" type="image/x-icon" href="assets/icons/favicon.ico" />
        <link rel="canonical" href="https://jschilders.com" />
        <meta name="author" content="Julio Schilders" />
        <meta
            name="description"
            content="Portfolio Julio Schilders, Javascript developer"
        />
        <Head />
        <body>
            <ThemeScript />
            <Main />
            <NextScript />
        </body>
    </html>
);

export default Layout;
