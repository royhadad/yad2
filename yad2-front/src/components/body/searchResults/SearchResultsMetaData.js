import React from 'react';

class SearchResultsMetaData extends React.Component{
    render(){
        return (
            <div className='search-results-meta-data-wrapper'>
                <h2>מה שחיפשת אח שלי...</h2>
                <p>מציג {this.props.totalItems} מודעות</p>
            </div>
        );
    }
}

export default SearchResultsMetaData;