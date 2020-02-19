import React from 'react';
import { Link } from 'react-router-dom';
import { history } from '../../../routers/AppRouter';
import onClickOutside from 'react-onclickoutside'
import resources from '../../../resources.json';
const propertyTypes = resources.general.propertyTypes;
const searchBarHeaderResources = resources.body.searchBar.searchBarHeader;

const getSpecialWordFromPath = (currentPath) => {
    const preFix = '/realestate';
    const afterRealEstate = currentPath.slice(currentPath.indexOf(preFix) + preFix.length);
    if (afterRealEstate[0] !== '/') {
        return 'ERROR!';
    }
    return propertyTypes[afterRealEstate.slice(1)] || 'ERROR!';
}

class SearchBarHeader extends React.Component {
    state = {
        shouldShowDropDown: false
    }
    toggleDropDown = () => {
        this.setState((prevState) => ({ shouldShowDropDown: !prevState.shouldShowDropDown }));
    };

    render() {
        const type = getSpecialWordFromPath(history.location.pathname);
        const specialWordJSX = <span className='search-bar__header__special-word searchBarHeaderDropDown__ignoreClickOutside' onClick={this.toggleDropDown}>{type}</span>;
        return (
            <div className='search-bar__header'>
                {searchBarHeaderResources.titleRight}{(type !== propertyTypes['commercial'] && type !== propertyTypes['roommates']) && 'ל'}{specialWordJSX}{searchBarHeaderResources.titleLeft}
                {this.state.shouldShowDropDown && <SearchBarHeaderDropDown toggleDropDown={this.toggleDropDown} outsideClickIgnoreClass={'searchBarHeaderDropDown__ignoreClickOutside'} />}
            </div>
        );
    }
}

export default SearchBarHeader;

class SearchBarHeaderDropDownWithoutOnclickoutside extends React.Component {
    handleClickOutside = this.props.toggleDropDown;
    render() {
        const preFix = '/realestate';
        return (
            <div className='search-bar__header__drop-down__wrapper'>
                <div className='search-bar__header__drop-down__header'>{searchBarHeaderResources.dropDownHeader}</div>
                <SearchBarHeaderDropDownItem text={propertyTypes['forsale']} url={preFix + '/forsale'} />
                <SearchBarHeaderDropDownItem text={propertyTypes['rent']} url={preFix + '/rent'} />
                <SearchBarHeaderDropDownItem text={propertyTypes['roommates']} url={preFix + '/roommates'} />
                <SearchBarHeaderDropDownItem text={propertyTypes['commercial']} url={preFix + '/commercial'} />
            </div>
        );
    }
}
const SearchBarHeaderDropDown = onClickOutside(SearchBarHeaderDropDownWithoutOnclickoutside);

const SearchBarHeaderDropDownItem = ({ text, url }) => {
    const specialStyleClass = ' search-bar__header__drop-down__item__selected';
    const className = 'search-bar__header__drop-down__item' + (text === getSpecialWordFromPath(history.location.pathname) ? specialStyleClass : '');
    return (
        <div className={className}>
            <Link to={url}>
                {text}
            </Link>
        </div>
    );
}