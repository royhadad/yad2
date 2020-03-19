const express = require('express');
const chalk = require('chalk');
const cors = require('cors')
const compression = require('compression');
const morgan = require('morgan');
const path = require('path');
const favicon = require('serve-favicon');
const setHeaders = require('./middleWare/setHeaders');
require('dotenv').config();

//choose port
const PORT = parseInt(process.env.PORT, 10);
const isDev = process.env.NODE_ENV !== 'production';

//routes
const feed = require('./routes/feed.js');
const utils = require('./routes/utils');
const useAPIRoutes = () => {
    app.use(favicon(path.resolve(__dirname, '../yad2-front/build/favicon.ico')));
    app.use(express.json());
    app.use(cors())
    app.get('/ping', (req, res) => {
        return res.send('pong');
    });
    const apiRoutePrefix = '/api';
    app.use(apiRoutePrefix, feed);
    app.use(apiRoutePrefix, utils);
}
const serveReactApp = () => {
    app.use(express.static(path.resolve(__dirname, '../yad2-front/build')));
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, '../yad2-front/build/index.html'));
    });
}

const app = express();

app.use(setHeaders);

if (isDev) {
    app.use(morgan('dev'));
    useAPIRoutes();
} else {
    app.disable('x-powered-by');
    app.use(compression());
    app.use(morgan('common'));

    useAPIRoutes();
    serveReactApp();
}

app.listen(PORT, () => console.log(chalk.green(`listening on port ${PORT}...`)));

//<link rel="icon" type="image/png" href="/favicon.ico" />