import React from 'react';
import FeedItemOpened from './FeedItemOpened';
import FeedItemClosed from './FeedItemClosed';
import { Link } from 'react-router-dom';
import resources from '#resources#';
const feedItemResources = resources.body.searchResults.feedItem;

class FeedItem extends React.Component {
    state = {
        isOpened: false
    }
    toggleIsOpened = () => {
        this.setState((prevState) => ({ isOpened: !prevState.isOpened }));
    }
    render() {
        return (
            <div className='feed-item__wrapper'>
                {
                    this.props.showEditLink && (
                        <div className='edit-item__button'>
                            <Link className='edit-item__button__link' to={`/personal/edit/${this.props.item.id}`}>{feedItemResources.editButtonText}</Link>
                        </div>
                    )
                }
                {
                    this.state.isOpened
                        ? <FeedItemOpened item={this.props.item} toggleIsOpened={this.toggleIsOpened} />
                        : <FeedItemClosed item={this.props.item} toggleIsOpened={this.toggleIsOpened} />
                }
            </div>
        );
    }
}
export default FeedItem;