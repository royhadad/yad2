import React from 'react';
import { connect } from 'react-redux';
import { fetchItems } from '../../../selectors/items';
import ReactLoading from 'react-loading';
import FeedItem from './FeedItem';

class SearchResults extends React.Component {
    componentDidMount() {
        fetchItems();
    }
    render() {
        return (
            <div className={this.props.isLoading ? 'results-list__loading' : 'results-list'}>
                {
                    this.props.isLoading
                        ?
                        <ReactLoading type='bubbles' color='#ff7100' width={256} height={256} />
                        :
                        this.props.itemsArr.map((item, index) => <FeedItem key={index} item={item} />)
                }
            </div>
        );
    }
}
const mapStateToProps = (state) => ({
    itemsArr: state.items.itemsArr,
    isLoading: state.items.isLoading
});
export default connect(mapStateToProps)(SearchResults);