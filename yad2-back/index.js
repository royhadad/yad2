const express = require('express');
const chalk = require('chalk');
PORT_NUMBER = 8080;
const feed = require('./routes/feed.js');
var cors = require('cors')
const app = express();
app.use(express.json());
app.use(cors())

app.use(feed);

app.listen(PORT_NUMBER, () => console.log(chalk.green(`listening on port ${PORT_NUMBER}...`)));