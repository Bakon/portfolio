import express from 'express';
import next from 'next';

const dev = process.env.NODE_ENV !== 'production';
const app = next({dev});
const handle = app.getRequestHandler();

app.prepare()
    .then(() => {
        const server = express();

        server.get('*', (req, res) => handle(req, res));

        server.listen(5000, (err) => {
            if (err) throw err;
        });

        server.get('/p/:id', (req, res) => {
            const actualPage = '/post';
            const queryParams = {id: req.params.id};
            app.render(req, res, actualPage, queryParams);
        });
    })
    .catch((ex) => {
        console.error(ex.stack);
        process.exit(1);
    });
