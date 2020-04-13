const sharp = require('sharp');
const { v4: uuid } = require('uuid');
//using promise.all to speed up async formatting

const getSharpenedBuffer = (buffer) => {
    return sharp(buffer).resize({ width: 500, height: 500 }).jpeg().toBuffer();
}

const getAllSharpenedBuffers = (buffers) => {
    return Promise.all(buffers.map(buffer => getSharpenedBuffer(buffer)));
}

const getAllSharpenedFiles = async (files) => {
    const buffers = await getAllSharpenedBuffers(files.map((file) => (file.buffer)))
    return files.map((file, index) => ({
        ...file,
        uuid: uuid(),
        buffer: buffers[index]
    }));
}

const sharpImageFormatter = async (req, res, next) => {
    try {
        if (req.files && req.files.length) {
            req.files = await getAllSharpenedFiles(req.files);
        }
        next();
    } catch (e) {
        res.status(500).send(e);
    }
}

module.exports = sharpImageFormatter;