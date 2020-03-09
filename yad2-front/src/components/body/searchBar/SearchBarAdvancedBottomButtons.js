import React from 'react';
import { connect } from 'react-redux';
import { clearSearch } from '../../../actions/filters';
import { fetchItems } from '../../../selectors/items';
import resources from '../../../resources.json';
const searchBarResources = resources.body.searchBar;

class SearchBarAdvancedBottomButtons extends React.Component {
    render() {
        return (
            <div className='search-bar-advanced__bottom-buttons__wrapper'>
                <span className='invisible' />
                <button className='search-bar__main__search-button' onClick={() => fetchItems()}>
                    {searchBarResources.searchButton}
                </button>
            <button className='search-bar-advanced__bottom-buttons__clear-button' onClick={this.props.clearSearch}>
                {searchBarResources.clearButtonText}
            </button>
            </div >
        );
    }
}
const mapDispatchToProps = (dispatch) => ({
    clearSearch: () => dispatch(clearSearch())
})
export default connect(undefined, mapDispatchToProps)(SearchBarAdvancedBottomButtons);