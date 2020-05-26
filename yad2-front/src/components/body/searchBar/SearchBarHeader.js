import React from 'react';
import { Link } from 'react-router-dom';
import onClickOutside from 'react-onclickoutside'
import resources from '#resources#';
import { connect } from 'react-redux';
const propertyTypes = resources.general.propertyTypes;
const searchBarHeaderResources = resources.body.searchBar.searchBarHeader;

class SearchBarHeaderWithoutStore extends React.Component {
    state = {
        shouldShowDropDown: false
    }
    toggleDropDown = () => {
        this.setState((prevState) => ({ shouldShowDropDown: !prevState.shouldShowDropDown }));
    };

    render() {
        const type = this.props.category;
        const specialWordJSX = <span className='search-bar__header__special-word searchBarHeaderDropDown__ignoreClickOutside' onClick={this.toggleDropDown}>{propertyTypes[type]}</span>;
        return (
            <div className='search-bar__header'>
                {searchBarHeaderResources.titleRight}{(type !== 'commercial' && type !== 'roommates') && 'ל'}{specialWordJSX}{searchBarHeaderResources.titleLeft}
                {this.state.shouldShowDropDown && <SearchBarHeaderDropDown toggleDropDown={this.toggleDropDown} outsideClickIgnoreClass={'searchBarHeaderDropDown__ignoreClickOutside'} category={this.props.category} />}
            </div>
        );
    }
}
const mapStateToProps1 = (state) => ({
    category: state.filters.search.category
});
const SearchBarHeader = connect(mapStateToProps1)(SearchBarHeaderWithoutStore);

export default SearchBarHeader;

class SearchBarHeaderDropDownWithoutOnclickoutside extends React.Component {
    handleClickOutside = this.props.toggleDropDown;
    render() {
        return (
            <div className='search-bar__header__drop-down__wrapper'>
                <div className='search-bar__header__drop-down__header'>{searchBarHeaderResources.dropDownHeader}</div>
                <SearchBarHeaderDropDownItem currentCategory={this.props.category} itemCategory={'forsale'} />
                <SearchBarHeaderDropDownItem currentCategory={this.props.category} itemCategory={'rent'} />
                <SearchBarHeaderDropDownItem currentCategory={this.props.category} itemCategory={'roommates'} />
                <SearchBarHeaderDropDownItem currentCategory={this.props.category} itemCategory={'commercial'} />
            </div>
        );
    }
}
const SearchBarHeaderDropDown = onClickOutside(SearchBarHeaderDropDownWithoutOnclickoutside);

const SearchBarHeaderDropDownItem = ({ currentCategory, itemCategory }) => {
    const preFix = '/realestate';
    const url = preFix + '/' + itemCategory;
    const text = propertyTypes[itemCategory];
    const specialStyleClass = ' search-bar__header__drop-down__item__selected';
    const className = 'search-bar__header__drop-down__item' + ((itemCategory === currentCategory) ? specialStyleClass : '');
    return (
        <div className={className}>
            <Link to={url}>
                {text}
            </Link>
        </div>
    );
}