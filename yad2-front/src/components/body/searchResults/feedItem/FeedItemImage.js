import React from 'react';
import FeedItemImageNumOfImages from './FeedItemImageNumOfImages';
import resources from '#resources#';
const ITEM_PLACEHOLDER_IMAGE_URL = 'https://royhadad-yad2.s3-eu-west-1.amazonaws.com/images/item_placeholder_image.jpg';

export default (props) => (
    <div className={'feed-item__image__wrapper ' + (props.isOpen ? 'feed-item__image__wrapper--open' : 'feed-item__image__wrapper--close')}>
        <div className='feed-item__image__container'>
            <img className='feed-item-image' src={props.item.imagesURLs[0] || ITEM_PLACEHOLDER_IMAGE_URL} alt={props.item.text} />
            <div className='feed-item__image__heart'><span>{resources.general.unicodeChars.heart}</span></div>
            <FeedItemImageNumOfImages numOfImages={props.item.imagesURLs.length} />
        </div>
    </div>
);