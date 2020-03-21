import React from 'react';
import resources from '#resources#';
const headerResources = resources.body.searchResults.feedItem.header;

export default (props) => (
    <div className={'feed-item__props__wrapper'}>
        <span>
            <span className='value'>{props.item.rooms}</span>
            <span className='text'>{headerResources.roomsText}</span>
        </span>
        <span>
            <span className='value'>{props.item.floor}</span>
            <span className='text'>{headerResources.floorText}</span>
        </span>
        <span>
            <span className='value'>{props.item.size}</span>
            <span className='text'>{headerResources.sizeText}</span>
        </span>
    </div>
);