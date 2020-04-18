import React from 'react';
import FeedItemImage from './FeedItemImage';
import FeedItemDescription from './FeedItemDescription';
import FeedItemClosedProps from './FeedItemProps';
import FeedItemClosedPrice from './FeedItemClosedPrice';
import getBackgroundColorClassByItem from '#src#/utility/getBackgroundColorClassByItem';

export default (props) => (
    <div className={'feed-item__header ' + getBackgroundColorClassByItem(props.item)} onClick={props.toggleIsOpened}>
        <FeedItemImage item={props.item} isOpen={true} toggleIsOpened={props.toggleIsOpened} />
        <div className='feed-item__header__middle'>
            <FeedItemDescription item={props.item} isOpen={true} />
            <FeedItemClosedProps item={props.item} isOpen={true} />
        </div>
        <FeedItemClosedPrice item={props.item} isOpen={true} />
    </div>
);