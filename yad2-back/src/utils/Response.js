module.exports = class Response {
    constructor(status, body) {
        this.status = status;
        this.body = body;
    }
}