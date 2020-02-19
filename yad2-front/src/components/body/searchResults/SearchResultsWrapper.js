import React from 'react';
import SearchResultsMetaData from './SearchResultsMetaData';
import FilterBar from './filterBar/FilterBar';
import SearchResults from './SearchResults';

export default () => {
    return (
        <div className='search-results__wrapper'>
            <div className='search-results__wrapper__right-side'>
                <SearchResultsMetaData />
                <FilterBar />
                <SearchResults />
            </div>
            <div className='search-results__wrapper__left-side'>
            </div>
        </div>
    );
};