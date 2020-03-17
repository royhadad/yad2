const express = require('express');
const chalk = require('chalk');
const cors = require('cors')
const compression = require('compression');
const morgan = require('morgan');
const path = require('path');
const favicon = require('serve-favicon');
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

app.use((req, res, next) => {
    res.setHeader("Content-Security-Policy", "default-src 'self'; script-src 'self' https://static.ads-twitter.com https://www.google-analytics.com https://maps.googleapis.com 'sha256-m5KNzjvGgQ8MgzI8EMIRHyNyascjtXxEnY9EhqPShvM='; img-src 'self' https://royhadad-yad2.s3-eu-west-1.amazonaws.com https://twitter.com https://pbs.twimg.com; font-src 'self' https://fonts.gstatic.com; style-src 'self' https://fonts.googleapis.com; frame-ancestors 'none';");
    res.setHeader("Referrer-Policy", "no-referrer, strict-origin-when-cross-origin");
    res.setHeader("Strict-Transport-Security", "max-age=63072000; includeSubDomains");
    res.setHeader("X-Content-Type-Options", "nosniff");
    res.setHeader("X-Frame-Options", "DENY");
    res.setHeader("X-XSS-Protection", "1; mode=block");
    return next();
});

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