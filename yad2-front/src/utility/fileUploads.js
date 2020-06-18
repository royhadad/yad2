import { v4 as uuid } from 'uuid';
import getFileTypeByFileName from './getFileTypeByFileName';

export class FileUploadObject {
    constructor(signedUploadUrlPayload, file) {
        this.signedUploadUrlPayload = signedUploadUrlPayload;
        this.file = file;
    }
}

export const sendMultipleFiles = async (fileUploadObjectArr) => {
    const resultPromises = fileUploadObjectArr.map((fileUploadObject) => (sendSingleFile(fileUploadObject)))
    const filesKeys = await Promise.all(resultPromises);
    return filesKeys;
}

export const sendSingleFile = async (fileUploadObject) => {
    try {
        const { file, signedUploadUrlPayload } = fileUploadObject;
        const { url, fields } = signedUploadUrlPayload;

        const form = new FormData();
        for (const field in fields) {
            form.append(field, fields[field]);
        }
        form.append('file', file);
        // form.forEach((value, key) => {
        //     console.log(key + ': ' + value);
        // });

        const requestOptions = {
            method: 'POST',
            body: form
        }
        const response = await fetch(url, requestOptions)
        if (response.ok) {
            return fields.key;
        } else {
            throw response;
        }
    } catch (e) {
        throw e;
    }
};

export const getSignedPost = async (itemId, files) => {
    try {
        const imagesMetadata = files.map((file) => {
            return {
                type: getFileTypeByFileName(file.name),
                uuid: uuid()
            }
        });
        const requestOptions = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ imagesMetadata })
        }
        const response = await fetch(`/api/items/images/${itemId}`, requestOptions);
        if (response.status !== 201) {
            throw response;
        }
        return response;
    } catch (e) {
        throw e;
    }
}

export const addImagesURLs = async (itemId, imagesKeys) => {
    try {
        const response = await fetch(`/api/items/imagesURLs/${itemId}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ imagesURLs: imagesKeys })
        })
        if (response.ok) {
            return response;
        } else {
            throw response;
        }
    } catch (e) {
        throw e
    }
}