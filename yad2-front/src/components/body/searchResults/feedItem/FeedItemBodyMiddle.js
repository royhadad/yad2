import React from 'react';
import resources from '#resources#';
const bodyResources = resources.body.searchResults.feedItem.body;

export default ({ item }) => (
    <div className='feed-item__body__middle'>
        <span>{bodyResources.middleHeader}</span>
        <div className='feed-item__body__middle__items'>
        </div>
        <hr />
    </div>
);