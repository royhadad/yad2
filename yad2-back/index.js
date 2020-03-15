const express = require('express');
const chalk = require('chalk');
const cors = require('cors')
const compression = require('compression');
const morgan = require('morgan');
const path = require('path');

//add headers to index.html file
require('./handle_env');

//choose port
const normalizePort = (port) => parseInt(port, 10);
const PORT = normalizePort(process.env.PORT);

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
const isDev = app.get('env') !== 'production';

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