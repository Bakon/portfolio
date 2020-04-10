import next from 'next';
import express from 'express';

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare()
    .then(() => {
        const server = express();

        server.get('*', (req, res) => handle(req, res));

        server.listen(8080, (err) => {
            console.log('Now running on port 8080!');
            if (err) throw err;
        });
    })

    .catch(({ stack }) => {
        console.error(stack);
        process.exit(1);
    });
