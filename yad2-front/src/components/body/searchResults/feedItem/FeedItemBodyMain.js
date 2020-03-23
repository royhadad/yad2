import React from 'react';
import FeedItemBodyTop from './FeedItemBodyTop';
import FeedItemBodyMiddle from './FeedItemBodyMiddle';
import FeedItemBodyBottom from './FeedItemBodyBottom';

export default ({ item }) => (
    <div className='feed-item__body__main'>
        <FeedItemBodyTop item={item} />
        <FeedItemBodyMiddle item={item} />
        <FeedItemBodyBottom item={item} />
    </div>
);