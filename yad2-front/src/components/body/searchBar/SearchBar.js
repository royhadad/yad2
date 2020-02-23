import React from 'react';
import SearchBarHeader from './SearchBarHeader';
import SearchBarMain from './SearchBarMain';
import SearchBarAdvanced from './SearchBarAdvanced';
import uuid from 'uuid';

class SearchBar extends React.Component {
    state = {
        shouldLoadAdvancedSearch: false,
        parentRect: undefined
    };
    className='search-bar__wrapper';
    id=this.className+uuid();
    componentDidMount() {
    }
    toggleShouldLoadAdvancedSearch = () => {
        this.setState((prevState) => ({
            shouldLoadAdvancedSearch: !prevState.shouldLoadAdvancedSearch,
            parentRect: document.getElementById('search-bar__wrapper1').getBoundingClientRect()
        }));
    }
    render() {
        return (
            <div className={this.className} id={this.id}>
                <SearchBarHeader />
                <SearchBarMain toggleShouldLoadAdvancedSearch={this.toggleShouldLoadAdvancedSearch} />
                {this.state.shouldLoadAdvancedSearch && <SearchBarAdvanced parentRect={this.state.parentRect} />}
            </div>
        );
    }
}

export default SearchBar;