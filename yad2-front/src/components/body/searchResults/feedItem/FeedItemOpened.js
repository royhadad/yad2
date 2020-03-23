import React from 'react';
import FeedItemHeader from './FeedItemHeader';
import FeedItemBody from './FeedItemBody';
import FeedItemFooter from './FeedItemFooter';

class FeedItemOpened extends React.Component {
    render() {
        return (
            <div className='feed-item--opened'>
                <FeedItemHeader item={this.props.item} toggleIsOpened={this.props.toggleIsOpened} />
                <FeedItemBody item={this.props.item} />
                <FeedItemFooter item={this.props.item} />
            </div>
        )
    }
}

export default FeedItemOpened;