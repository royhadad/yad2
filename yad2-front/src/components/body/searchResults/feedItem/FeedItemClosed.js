import React from 'react';
import FeedItemImage from './FeedItemImage';
import FeedItemClosedProps from './FeedItemProps';
import FeedItemClosedPrice from './FeedItemClosedPrice';
import FeedItemDescription from './FeedItemDescription';

class FeedItemClosed extends React.Component {
    render() {
        return (
            <div className='feed-item--closed' onClick={this.props.toggleIsOpened}>
                <FeedItemImage item={this.props.item} isOpen={false} />
                <FeedItemDescription item={this.props.item} isOpen={false} />
                <FeedItemClosedProps item={this.props.item} isOpen={false} />
                <FeedItemClosedPrice item={this.props.item} isOpen={false} />
            </div >
        )
    }
}

export default FeedItemClosed;