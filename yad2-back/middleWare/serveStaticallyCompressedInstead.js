const path = require('path');
const PATH_TO_BUILD = path.join(__dirname, '../../yad2-front', 'build');
const fs = require('fs');
//test
module.exports = (req, res, next) => {
    if (/\.js$/.test(req.originalUrl) && req.headers["accept-encoding"].includes("gzip")) {
        const gzippedPath = path.join(PATH_TO_BUILD, req.originalUrl + '.gz');
        if (fs.existsSync(gzippedPath)) {
            res.set("Content-Encoding", "gzip");
            return res.sendFile(gzippedPath);
        }
    }
    next();
};