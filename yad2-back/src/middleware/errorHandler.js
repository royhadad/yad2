const chalk = require('chalk');
const prodErrorHandler = (error, req, res, next) => {
    console.log(chalk.red(`ERROR: ${JSON.stringify({
        status: error.status,
        message: error.message,
        stack: error.stack
    })}`));
    res.status(error.status || 500).send({
        error: {
            message: 'something unexpectedly went wrong!'
        }
    });
}

const devErrorHandler = (error, req, res, next) => {
    console.log(chalk.red(`ERROR: ${JSON.stringify({
        status: error.status,
        message: error.message,
        stack: error.stack
    })}`));
    res.status(error.status || 500).send({
        message: error.message
    });
}

module.exports = {
    prodErrorHandler,
    devErrorHandler
}