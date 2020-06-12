import React from 'react';
import FeedItemImage from './FeedItemImage';
import FeedItemClosedProps from './FeedItemProps';
import FeedItemClosedPrice from './FeedItemClosedPrice';
import FeedItemDescription from './FeedItemDescription';
import getBackgroundColorClassByItem from '#src#/utility/getBackgroundColorClassByItem';

class FeedItemClosed extends React.Component {
    render() {
        return (
            <div className={'feed-item--closed ' + getBackgroundColorClassByItem(this.props.item)} onClick={this.props.toggleIsOpened}>
                <FeedItemImage item={this.props.item} isOpen={false} toggleIsOpened={this.props.toggleIsOpened} />
                <FeedItemDescription item={this.props.item} isOpen={false} />
                <FeedItemClosedProps item={this.props.item} isOpen={false} />
                <FeedItemClosedPrice item={this.props.item} isOpen={false} />
            </div >
        )
    }
}

export default FeedItemClosed;