const sharp = require('sharp');
var aws = require('aws-sdk');

aws.config.update({
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    region: process.env.AWS_REGION
})

const s3 = new aws.S3();

const upload = (file) => {
    return new Promise((resolve, reject) => {

    })
    const params = {
        Bucket: 'royhadad-yad2',
        Key: `images/items/${file.uuid}`,
        Body: file.buffer
    };
    s3.upload(params, function (s3Err, data) {
        if (s3Err) throw s3Err
        console.log(`File uploaded successfully at ${data.Location}`)
    });
}

module.exports = upload;