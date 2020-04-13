import React from 'react';
import FeedItemImageNumOfImages from './FeedItemImageNumOfImages';
import resources from '#resources#';

export default (props) => (
    <div className={'feed-item__image__wrapper ' + (props.isOpen ? 'feed-item__image__wrapper--open' : 'feed-item__image__wrapper--close')}>
        <div className='feed-item__image__container'>
            <img className='feed-item-image' src={props.item.imagesURLs[0]} alt={props.item.text} />
            <div className='feed-item__image__heart'><span>{resources.general.unicodeChars.heart}</span></div>
            <FeedItemImageNumOfImages numOfImages={props.item.imagesURLs.length} />
        </div>
    </div>
);