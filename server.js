import express from 'express';
import React from 'react';
import {renderToString} from 'react-dom/server';
import { Home } from './src/pages/home';
import {StaticRouter} from 'react-router-dom/server';
import App from './src/App';
import fs from 'fs';
import path from 'path';
import SpotifyWebApi from 'spotify-web-api-node';

const app = express();

app.use(express.static('./build', {index:false}))

app.get('/*', (req, res) => {
    const reactApp = renderToString(
        <StaticRouter location={req.url}>
            <App/>
        </StaticRouter>
    );

    const templeteFile = path.resolve('./build/index.html');
    fs.readFile(templeteFile,'utf8', (err, data) => {
        if (err){
            return res.status(500).send(err);
        }
        return res.send(
            data.replace('<div id = "root"></div>',`<div id="root">${reactApp}</div>`)
        )
    });
});

app.listen(8080, () => {
    console.log('Server is listening on port 8080');
})