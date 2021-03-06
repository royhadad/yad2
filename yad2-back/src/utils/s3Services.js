const sharp = require('sharp');
var aws = require('aws-sdk');
//file must have property uuid
//file will be saved to royhadad-yad2/images/items/${uuid}


aws.config.update({
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    region: process.env.AWS_REGION
})

const s3 = new aws.S3();

const uploadSingle = (file) => {
    return new Promise((resolve, reject) => {
        if (!(file && file.uuid && file.buffer)) {
            reject('invalid file');
        }
        const params = {
            Bucket: 'royhadad-yad2',
            ACL: 'public-read',
            Key: `images/items/${file.uuid}.jpg`,
            Body: file.buffer
        };
        s3.upload(params, function (s3Err, data) {
            if (s3Err) {
                reject(s3Err);
            } else {
                resolve(data.Location);
            }
        });
    })
}

const uploadMultiple = (files) => {
    return Promise.all(files.map(file => uploadSingle(file)));
}

const deleteSingle = (url) => {
    return new Promise((resolve, reject) => {
        if (!url) {
            reject();
        }
        const params = {
            Bucket: 'royhadad-yad2',
            Key: getPathFromURL(url)
        };
        s3.deleteObject(params, function (s3Err, data) {
            if (s3Err) {
                reject(s3Err);
            } else {
                resolve();
            }
        });
    })
}

const deleteMultiple = (urls) => {
    if (urls) {
        return Promise.all(urls.map(url => deleteSingle(url)));
    } else {
        return Promise.resolve();
    }
}

const getPathFromURL = (url) => {
    const path = url.slice(url.indexOf('/images') + 1);
    return path;
}


//new upload
const getPresignedUploadUrl = async (imageMetadata) => {
    try {
        const key = `images/items/${imageMetadata.uuid}.${imageMetadata.type}`;
        console.log(key);
        // const key = 'image1key';

        const params = {
            Bucket: 'royhadad-yad2',
            Expires: 300, //valid for 5 minutes
            Fields: {
                key: key,
                'acl': 'public-read'
            },
            Conditions: [
                {
                    'bucket': 'royhadad-yad2'
                },
                { "acl": "public-read" },
                ['content-length-range', 0, 5242880] // 5 Mb 5242880
            ]
        };
        const presignedUploadUrl = await s3.createPresignedPost(params);
        return presignedUploadUrl;
    } catch (e) {
        throw new Error(`Presigning post data encountered an error ${e}`);
    }
}

module.exports = {
    getPresignedUploadUrl,
    uploadMultiple,
    uploadSingle,
    deleteSingle,
    deleteMultiple,
    getPathFromURL
}