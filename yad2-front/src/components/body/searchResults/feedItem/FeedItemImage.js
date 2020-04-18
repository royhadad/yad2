import React from 'react';
import FeedItemImageNumOfImages from './FeedItemImageNumOfImages';
import resources from '#resources#';
import { connect } from 'react-redux';
import { openModal } from '#src#/actions/modal';
import ImageSlider, { modalStyle } from '#src#/components/generics/ImageSlider';

class FeedItemImage extends React.Component {
    openImageSlider = (e) => {
        e.stopPropagation();
        this.props.openModal(<ImageSlider images={this.props.item.imagesURLs} />, modalStyle);
    }

    render() {
        const props = this.props;
        return (
            <div className={'feed-item__image__wrapper ' + (props.isOpen ? 'feed-item__image__wrapper--open' : 'feed-item__image__wrapper--close')}>
                <div className='feed-item__image__container' onClick={this.openImageSlider}>
                    <img className='feed-item-image' src={props.item.imagesURLs[0]} alt={props.item.text} />
                    <div className='feed-item__image__heart'><span>{resources.general.unicodeChars.heart}</span></div>
                    <FeedItemImageNumOfImages numOfImages={props.item.imagesURLs.length} />
                </div>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => ({
    openModal: (childJSX, style) => dispatch(openModal(childJSX, style))
})
export default connect(undefined, mapDispatchToProps)(FeedItemImage)