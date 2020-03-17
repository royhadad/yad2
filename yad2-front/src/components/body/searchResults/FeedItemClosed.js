import React from 'react';
import resources from '../../../resources.json';
import getFullImageURL from '../../../utility/getFullImageURL';
const headerResources = resources.body.searchResults.feedItem.header;

class FeedItemClosed extends React.Component {
    notImplementedOnClickHandler = (e) => {
        e.stopPropagation();
        alert('TODO');
    }

    render() {
        return (
            <div className='feed-item--closed' onClick={this.props.toggleIsOpened}>
                <div className={'feed-item--closed__image__wrapper'}>
                    <div className='feed-item--closed__image__value'>
                        <img className='feed-item-image' src={getFullImageURL('items/'+this.props.item.imageURL)} alt={this.props.item.text}/>
                        <div className='feed-item--closed__image__heart'>{resources.general.unicodeChars.heart}</div>
                    </div>
                    <div className='feed-item--closed__image__text'>
                        <p className='feed-item--closed__image__text__header'>{this.props.item.location.description}</p>
                        <p className='feed-item--closed__image__text__body'>{this.props.item.location.description}</p>
                    </div>
                </div>
                <div className={'feed-item--closed__props__wrapper'}>
                    <span>
                        <span className='value'>{this.props.item.rooms}</span>
                        <span className='text'>{headerResources.roomsText}</span>
                    </span>
                    <span>
                        <span className='value'>{this.props.item.floor}</span>
                        <span className='text'>{headerResources.floorText}</span>
                    </span>
                    <span>
                        <span className='value'>{this.props.item.size}</span>
                        <span className='text'>{headerResources.sizeText}</span>
                    </span>
                </div>
                <div className={'feed-item--closed__price__wrapper'}>
                    <span className='open-in-new-tab' onClick={this.notImplementedOnClickHandler} >
                        <span className="newWindow--small"></span>
                        <span className="open-in-new-tab-text">{headerResources.openInNewTabText}</span>
                    </span>
                    <span className={'feed-item--closed__price__value'}>
                        {this.props.item.price} {resources.general.unicodeChars.shekel}
                    </span>
                </div>
            </div>
        )
    }
}

export default FeedItemClosed;