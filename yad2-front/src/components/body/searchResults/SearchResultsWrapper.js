import React from 'react';
import SearchResultsMetaData from './SearchResultsMetaData';
import FilterBar from './filterBar/FilterBar';
import ResultsList from './ResultsList';
import Paging from './Paging';
import { connect } from 'react-redux';

class SearchResultsWrapper extends React.Component {

    render() {
        return (
            <div className='search-results__wrapper'>
                <div className='search-results__wrapper__right-side'>
                    <SearchResultsMetaData totalItems={this.props.totalItems} />
                    <FilterBar />
                    <ResultsList />
                    {this.props.numOfPages > 1 && <Paging />}
                </div>
                <div className='search-results__wrapper__left-side'>
                </div>
            </div>
        );
    }
}
const mapStateToProps = (state) => ({
    numOfPages: state.items.numOfPages,
    totalItems: state.items.totalItems
});
export default connect(mapStateToProps)(SearchResultsWrapper);