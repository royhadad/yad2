const chalk = require('chalk');
const prodErrorHandler = (error, req, res, next) => {
    console.log(chalk.red(`ERROR: ${error}`));
    res.status(error.status || 500).send({
        error: {
            message: 'something unexpectedly went wrong!'
        }
    });
}

const devErrorHandler = (error, req, res, next) => {
    console.log(chalk.red(`ERROR: ${error}`));
    res.status(error.status || 500).send(error);
}

module.exports = {
    prodErrorHandler,
    devErrorHandler
}