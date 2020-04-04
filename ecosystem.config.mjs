export const server = [
    {
        name: 'server',
        script: './server.mjs',
        production: {
            PORT: 5000,
            NODE_ENV: 'production',
        },
    },
];
