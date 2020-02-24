import React from 'react';
import SearchBarHeader from './SearchBarHeader';
import SearchBarMain from './SearchBarMain';
import SearchBarAdvanced from './SearchBarAdvanced';
import uuid from 'uuid';

class SearchBar extends React.Component {
    state = {
        shouldLoadAdvancedSearch: false,
        parentRect: undefined,
        className: 'search-bar__wrapper',
        id: 'search-bar__wrapper' + uuid()
    };
    updateParentRect = () => {
        this.setState((prevState) => ({ parentRect: document.getElementById(prevState.id).getBoundingClientRect() }));
    }
    componentDidMount() {
        window.addEventListener('resize', this.updateParentRect);
        window.addEventListener('scroll', this.updateParentRect);
    }
    componentWillUnmount() {
        window.removeEventListener('resize', this.updateParentRect);
        window.removeEventListener('scroll', this.updateParentRect);
    }
    toggleShouldLoadAdvancedSearch = () => {
        this.updateParentRect();
        this.setState((prevState) => ({
            shouldLoadAdvancedSearch: !prevState.shouldLoadAdvancedSearch
        }));
    }
    render() {
        return (
            <div className={this.state.className} id={this.state.id}>
                <SearchBarHeader />
                <SearchBarMain toggleShouldLoadAdvancedSearch={this.toggleShouldLoadAdvancedSearch} />
                {this.state.shouldLoadAdvancedSearch && <SearchBarAdvanced parentRect={this.state.parentRect} toggleShouldLoadAdvancedSearch={this.toggleShouldLoadAdvancedSearch} outsideClickIgnoreClass={this.state.className}/>}
            </div>
        );
    }
}

export default SearchBar;