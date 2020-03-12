import React from 'react';
import TopInfo from './TopInfo';
import SearchBar from './searchBar/SearchBar';
import SearchResultsWrapper from './searchResults/SearchResultsWrapper';

const RealEstatePageBody = () => {
    return (
        <div className='real-estate-page-body__wrapper'>
            <div className='real-estate-page-body__container'>
                <TopInfo/>
                <SearchBar/>
                <div className='search-results__spacer'></div>
                <SearchResultsWrapper/>
            </div> 
        </div> 
    );
}

export default RealEstatePageBody;
