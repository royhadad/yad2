const express = require('express');
const cors = require('cors')
const morgan = require('morgan');
const path = require('path');
const favicon = require('serve-favicon');
const setHeaders = require('./middleware/setHeaders');
const serveStaticScripts = require('./middleware/serveStaticallyCompressedInstead');
const cookieParser = require('cookie-parser');

require('./db/mongoose')

const PATH_TO_BUILD = path.resolve(__dirname, '../../yad2-front/build');
const isDev = process.env.NODE_ENV !== 'production';

//routes
const feed = require('./routers/feed.js');
const utils = require('./routers/utils');
const user = require('./routers/user');
const item = require('./routers/item');
const useAPIRoutes = () => {
    app.use(favicon(path.resolve(PATH_TO_BUILD, 'favicon.ico')));
    app.use(express.json());
    app.use(cors())
    app.use(cookieParser());
    app.get('/ping', (req, res) => {
        return res.send('pong');
    });
    const apiRoutePrefix = '/api';
    app.use(apiRoutePrefix, feed);
    app.use(apiRoutePrefix, utils);
    app.use(apiRoutePrefix, user);
    app.use(apiRoutePrefix, item);
}
const serveReactApp = () => {
    app.use(serveStaticScripts);
    app.use(express.static(PATH_TO_BUILD));
    app.get('*', (req, res) => {
        res.sendFile(path.join(PATH_TO_BUILD, 'index.html'));
    });
    app.all('*', (req, res) => {
        res.status(404).send({
            status: 'fail',
            message: `Can't find ${req.originalUrl} on this server!`
        });
    });
}

const app = express();

app.use(setHeaders);

if (isDev) {
    app.use(morgan('dev'));
    useAPIRoutes();
} else {
    app.disable('x-powered-by');
    app.use(morgan('common'));

    useAPIRoutes();
    serveReactApp();
}

module.exports = app;