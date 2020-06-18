import React from 'react';
import { connect } from 'react-redux';
import SearchField from '#components#/generics/SearchField';
import { setImages } from '../../../actions/itemForm';
import ImageUploader from 'react-images-upload';
import resources from '#resources#';
const inputsResources = resources.personalPage.itemForm.inputs;
const imageUploadResources = inputsResources.ImageUpload;

class ImageUploadWithoutStore extends React.Component {
    constructor(props) {
        super(props);
        this.state = { pictures: [] };
        this.onDrop = this.onDrop.bind(this);
    }
    onDrop(pictures) {
        this.setState((prevState) => ({ pictures }), () => {
            this.props.setImages(this.state.pictures);
        });
    }

    render() {
        return (
            <div className="image-upload__wrapper">
                <ImageUploader
                    withIcon={true}
                    buttonText={imageUploadResources.buttonText}
                    onChange={this.onDrop}
                    imgExtension={['.jpg', , '.jpeg', '.png']}
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
const mapDispatchToProps = (dispatch) => ({
    setImages: (images) => (dispatch(setImages(images)))
})
const mapStateToProps = (state) => ({
    images: state.itemForm.images
})
const ImageUpload = connect(mapStateToProps, mapDispatchToProps)(ImageUploadWithoutStore);
export default (props) => (
    <SearchField metaText={imageUploadResources.metaText} selectorJSX={<ImageUpload item={props.item} />} />
)