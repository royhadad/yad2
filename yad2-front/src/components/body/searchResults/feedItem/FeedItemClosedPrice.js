import React from 'react';
import FeedItemOpenedSellerDetails from './FeedItemSellerDetails';
import resources from '#resources#';
const headerResources = resources.body.searchResults.feedItem.header;

const notImplementedOnClickHandler = (e) => {
    e.stopPropagation();
    alert('TODO');
}

export default (props) => (
    <div className={'feed-item--closed__price__wrapper'}>
        {!props.isOpen ?
            (
                <span className='open-in-new-tab' onClick={notImplementedOnClickHandler} >
                    <span className="newWindow--small"></span>
                    <span className="open-in-new-tab-text">{headerResources.openInNewTabText}</span>
                </span>
            ) :
            (
                <span style={{ height: '1rem' }} />
            )
        }
        <span className={'feed-item--closed__price__value'}>
            {resources.general.unicodeChars.shekel}{props.item.price}
        </span>
        {props.isOpen ?
            (
                <FeedItemOpenedSellerDetails item={props.item} />
            ) :
            (
                <span className={'feed-item--closed__price__bottom-text'}>
                    <span className="feed-item--closed__price__update-time">{headerResources.updatedToday}</span>
                    <span className="feed-item--closed__price__click-for-details">{headerResources.clickForDetails}</span>
                </span>
            )
        }
    </div>
);