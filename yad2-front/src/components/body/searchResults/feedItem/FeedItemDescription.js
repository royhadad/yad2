import React from 'react';
import resources from '#resources#';

const notImplementedOnClickHandler = (e) => {
    e.stopPropagation();
    alert('TODO');
}

export default (props) => (
    <div className={'feed-item__description__wrapper'}>
        <p className='feed-item__description__header'>{props.item.location.description}</p>
        {
            props.isOpen &&
            (
                <span className={'feed-item__show-in-map'} onClick={notImplementedOnClickHandler}>
                    {' ' + resources.general.unicodeChars.map} מפה
                </span>
            )
        }
        <p className='feed-item__description__body'>{props.item.location.description}</p>
    </div>
);