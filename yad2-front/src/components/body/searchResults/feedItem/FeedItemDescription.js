import React from 'react';
import resources from '#resources#';

export default (props) => (
    <div className={'feed-item__description__wrapper'}>
        <p className='feed-item__description__header'>{props.item.location.description}</p>
        <p className='feed-item__description__body'>{props.item.location.description}</p>
    </div>
);