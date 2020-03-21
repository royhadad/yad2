import React from 'react';
import FeedItemImage from './FeedItemImage';
import FeedItemClosedProps from './FeedItemProps';
import FeedItemClosedPrice from './FeedItemClosedPrice';
import resources from '#resources#';
import getFullImageURL from '#src#/utility/getFullImageURL';
const feedItemResources = resources.body.searchResults.feedItem;
const headerResources = feedItemResources.header;
const bodyResources = feedItemResources.body;
const footerResources = feedItemResources.footer;

class FeedItemClosed extends React.Component {
    notImplementedOnClickHandler = (e) => {
        e.stopPropagation();
        alert('TODO');
    }

    render() {
        return (
            <div className='feed-item--opened'>
                <div className='feed-item--opened__header' onClick={this.props.toggleIsOpened}>
                    <FeedItemImage item={this.props.item} isOpen={true} />
                    <FeedItemClosedProps item={this.props.item} isOpen={true} />
                    <FeedItemClosedPrice item={this.props.item} isOpen={true} />
                </div>
                <div className='feed-item--opened__body'>
                    {
                        bodyResources.descriptionTitle
                    }
                </div>
                <div className='feed-item--opened__footer'>
                    <div className='feed-item--opened__footer__right'>
                        <span onClick={this.notImplementedOnClickHandler} className="newWindow"></span>
                        <span onClick={this.notImplementedOnClickHandler}>{resources.general.unicodeChars.printer}</span>
                        <span onClick={this.notImplementedOnClickHandler} style={{ opacity: '50%' }}>{resources.general.unicodeChars.link}</span>
                        <span onClick={this.notImplementedOnClickHandler}>{resources.general.unicodeChars.email}</span>
                        <span onClick={this.notImplementedOnClickHandler}><img style={{ width: 27, height: 20 }} src={getFullImageURL('facebook.png')} alt='share to facebook' /></span>
                        <span onClick={this.notImplementedOnClickHandler}><img style={{ width: 27, height: 27 }} src={getFullImageURL('whatsapp.png')} alt='share to whatsapp' /></span>
                    </div>
                    <div className='feed-item--opened__footer__left'>
                        <span className='feed-item--opened__footer__left__found-mistake' onClick={this.foundMistakeOnClickHandler}>
                            {
                                footerResources.foundMistakeText
                            }
                        </span>
                        <span className='feed-item--opened__footer__left__item-id'>
                            {
                                footerResources.itemIdText + this.props.item.id
                            }
                        </span>
                    </div>
                </div>
            </div>
        )
    }
}

export default FeedItemClosed;