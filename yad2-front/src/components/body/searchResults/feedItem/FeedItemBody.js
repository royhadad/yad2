import React from 'react';
import FeedItemBodyMoreProperties from './FeedItemBodyMoreProperties';
import FeedItemBodyMain from './FeedItemBodyMain';

export default (props) => (
    <div className='feed-item__body'>
        <FeedItemBodyMoreProperties sellerId={props.sellerId} sellerDetails={props.sellerDetails} />
        <FeedItemBodyMain item={props.item} />
    </div>
);