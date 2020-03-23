import React from 'react';
import FeedItemBodyTop from './FeedItemBodyTop';
import FeedItemBodyMiddle from './FeedItemBodyMiddle';
import FeedItemBodyBottom from './FeedItemBodyBottom';

export default (props) => (
    <div className='feed-item__body__main'>
        <FeedItemBodyTop item={props.item} />
        <FeedItemBodyMiddle item={props.item} />
        <FeedItemBodyBottom item={props.item} />
    </div>
);