import React from 'react';
import Img from '../../generics/Img';
import { connect } from 'react-redux';
import SearchField from '#components#/generics/SearchField';
import { deleteImageFromItem } from '../../../actions/itemForm';
import resources from '#resources#';
const inputsResources = resources.personalPage.itemForm.inputs;
const imageDeletionResources = inputsResources.ImageDeletion;
const ITEM_PLACEHOLDER_IMAGE_URL = 'https://royhadad-yad2.s3-eu-west-1.amazonaws.com/images/item_placeholder_image.jpg';

class ImageDeletionWithoutStore extends React.Component {
    render() {
        return (
            <div className='image-deletion'>
                {
                    this.props.imagesURLs.map((imageUrl, index) => (
                        <ImageDeletionItem url={imageUrl} itemId={this.props.itemId} key={index} />
                    ))
                }
            </div>
        )
    }
}
const mapStateToProps = (state) => ({
    imagesURLs: state.itemForm.imagesURLs,
    itemId: state.itemForm.itemId
})
const ImageDeletion = connect(mapStateToProps)(ImageDeletionWithoutStore);
export default (props) => (
    <SearchField metaText={imageDeletionResources.metaText} className={'image-deletion__wrapper'} selectorJSX={<ImageDeletion {...props} />} />
)

const ImageDeletionItem = (props) => {
    if (props.url !== ITEM_PLACEHOLDER_IMAGE_URL) {
        return (
            <div className='image-deletion-item'>
                <div onClick={() => deleteImageFromItem(props.itemId, props.url)} className='image-deletion-item__button'>delete item</div>
                <div className='image-deletion-item-img__wrapper'>
                    <Img src={props.url} className='image-deletion-item-img' />
                </div>
            </div>
        )
    } else {
        return (<p style={{ color: 'orange' }}>{imageDeletionResources.noImagesFound}</p>);
    }
}