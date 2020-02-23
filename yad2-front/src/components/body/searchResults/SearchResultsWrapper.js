import React from 'react';
import SearchResultsMetaData from './SearchResultsMetaData';
import FilterBar from './filterBar/FilterBar';
import ResultsList from './ResultsList';

export default () => {
    return (
        <div className='search-results__wrapper'>
            <div className='search-results__wrapper__right-side'>
                <SearchResultsMetaData />
                <FilterBar />
                <ResultsList />
            </div>
            <div className='search-results__wrapper__left-side'>
            </div>
        </div>
    );
};