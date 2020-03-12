import React from 'react';
import FeedItemOpened from './FeedItemOpened';
import FeedItemClosed from './FeedItemClosed';

class FeedItem extends React.Component {
    state = {
        isOpened: false
    }
    toggleIsOpened = () => {
        this.setState((prevState) => ({ isOpened: !prevState.isOpened }));
    }
    render() {
        return (
            this.state.isOpened
                ? <FeedItemOpened item={this.props.item} toggleIsOpened={this.toggleIsOpened}/>
                : <FeedItemClosed item={this.props.item} toggleIsOpened={this.toggleIsOpened}/>
        );
    }
}
export default FeedItem;