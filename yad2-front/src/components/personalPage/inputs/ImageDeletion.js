import React from 'react';
import Img from '../../generics/Img';
import SearchField from '#components#/generics/SearchField';
import resources from '#resources#';
const inputsResources = resources.personalPage.itemForm.inputs;
const imageDeletionResources = inputsResources.ImageDeletion;

//recieves props: item
class ImageDeletion extends React.Component {
    render() {
        return (
            <div className='image-deletion'>
                {
                    this.props.item.imagesURLs.map((imageUrl, index) => (
                        <ImageDeletionItem url={imageUrl} key={index} />
                    ))
                }
            </div>
        )
    }
}

export default (props) => (
    <SearchField metaText={imageDeletionResources.metaText} selectorJSX={<ImageDeletion {...props} />} />
)

const ImageDeletionItem = (props) => (
    <div className='image-deletion-item'>
        <button onClick={() => alert('should delete immedietly')}>delete item</button>
        <div className='image-deletion-item-img__wrapper'>
            <Img src={props.url} className='image-deletion-item-img' />
        </div>
    </div>
)