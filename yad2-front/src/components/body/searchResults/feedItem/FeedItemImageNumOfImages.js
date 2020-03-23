import React from 'react';
export default ({ numOfImages }) => (
    <React.Fragment>
        <div className='feed-item__image__num-of-images__wrapper'>
        </div>
        <span className='feed-item__image_num-of-images__content'>
            <span className='feed-item__image_num-of-images__text'>{numOfImages}+</span>
        </span>
    </React.Fragment>
);