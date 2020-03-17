const express = require('express');
const chalk = require('chalk');
const cors = require('cors')
const compression = require('compression');
const morgan = require('morgan');
const path = require('path');
require('dotenv').config();

//choose port
const PORT = parseInt(process.env.PORT, 10);
const isDev = process.env.NODE_ENV==='production';

//routes
const feed = require('./routes/feed.js');
const utils = require('./routes/utils');
const useAPIRoutes = () => {
    app.use(express.json());
    app.use(cors())
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