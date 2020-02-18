import React from 'react';

class SearchBarMain extends React.Component {

    onClickSearch = () => {
        alert('TODO');
    }

    render() {
        return (
            <div className='search-bar__main__container'>
                <span>
                חפשו אזור, עיר, שכונה או רחוב<input></input>
                </span>
                <button className='search-bar__main__advanced-button' onClick={this.props.toggleShouldLoadAdvancedSearch}>+ חיפוש מתקדם</button>
                <button className='search-bar__main__search-button' onClick={this.onClickSearch}>
                    <span style={{ fontFamily: 'Calibri', fontSize: '1.5rem' }} role="img" aria-label="search">&#128269;</span> חיפוש
                </button>
            </div>
        );
    }
}

export default SearchBarMain;