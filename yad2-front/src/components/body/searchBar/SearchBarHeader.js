import React from 'react';
import { Link } from 'react-router-dom';
import onClickOutside from 'react-onclickoutside'
import resources from '../../../resources.json';
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
        const preFix = '/realestate';
        return (
            <div className='search-bar__header__drop-down__wrapper'>
                <div className='search-bar__header__drop-down__header'>{searchBarHeaderResources.dropDownHeader}</div>
                <SearchBarHeaderDropDownItem text={propertyTypes['forsale']} url={preFix + '/forsale'} category={this.props.category} />
                <SearchBarHeaderDropDownItem text={propertyTypes['rent']} url={preFix + '/rent'} category={this.props.category} />
                <SearchBarHeaderDropDownItem text={propertyTypes['roommates']} url={preFix + '/roommates'} category={this.props.category} />
                <SearchBarHeaderDropDownItem text={propertyTypes['commercial']} url={preFix + '/commercial'} category={this.props.category} />
            </div>
        );
    }
}
const SearchBarHeaderDropDown = onClickOutside(SearchBarHeaderDropDownWithoutOnclickoutside);

const SearchBarHeaderDropDownItem = ({ text, url, UrlCategory }) => {
    const specialStyleClass = ' search-bar__header__drop-down__item__selected';
    const className = 'search-bar__header__drop-down__item' + ((text === UrlCategory) ? specialStyleClass : '');
    return (
        <div className={className}>
            <Link to={url}>
                {text}
            </Link>
        </div>
    );
}