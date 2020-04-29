import React from 'react';
import ReactLoading from 'react-loading';
import FeedItem from './feedItem/FeedItem';

//PROPS:
//isLoading: boolean
//itemsArr: item[]
class SearchResults extends React.Component {
    render() {
        return (
            <div className={this.props.isLoading ? 'results-list__loading' : 'results-list'}>
                {
                    this.props.isLoading
                        ?
                        <ReactLoading type='bubbles' color='#ff7100' width={256} height={256} />
                        :
                        this.props.itemsArr.map((item, index) => {
                            return <FeedItem key={index} item={item} showEditLink={this.props.showEditLink} />
                        })
                }
            </div>
        );
    }
}

export default SearchResults;