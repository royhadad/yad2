import React from 'react';
import SearchField from '#components#/generics/SearchField';
import ImageUploader from 'react-images-upload';
import resources from '#resources#';
const inputsResources = resources.personalPage.itemForm.inputs;
const imageUploadResources = inputsResources.ImageUpload;

class ImageUpload extends React.Component {
    constructor(props) {
        super(props);
        this.state = { pictures: [] };
        this.onDrop = this.onDrop.bind(this);
    }

    onDrop(picture) {
        this.setState({
            pictures: picture
        });
    }

    render() {
        console.log(this.state);

        return (
            <div className="image-upload__wrapper">
                <ImageUploader
                    withIcon={true}
                    buttonText={imageUploadResources.buttonText}
                    onChange={this.onDrop}
                    imgExtension={['.jpg', '.png']}
                    maxFileSize={5242880}
                    singleImage={false}
                    withPreview={true}
                    label={imageUploadResources.label}
                    fileSizeError={imageUploadResources.fileSizeError}
                    fileTypeError={imageUploadResources.fileTypeError}
                />
            </div>
        );
    }
}

export default () => (
    <SearchField metaText={imageUploadResources.metaText} selectorJSX={<ImageUpload />} />
)