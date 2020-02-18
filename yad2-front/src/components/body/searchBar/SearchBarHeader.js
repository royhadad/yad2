import React from 'react';
import { Link } from 'react-router-dom';
import { history } from '../../../routers/AppRouter';
import onClickOutside from 'react-onclickoutside'

const getSpecialWordFromPath = (currentPath) => {
    const preFix = '/realestate';
    const afterRealEstate = currentPath.slice(currentPath.indexOf(preFix) + preFix.length);
    switch (afterRealEstate) {
        case '/forsale':
            return 'מכירה'
        case '/rent':
            return 'השכרה'
        case '/roommates':
            return 'שותפים'
        case '/commercial':
            return 'מסחרי'
        default:
            throw new Error('invalid url!');
    }
}

class SearchBarHeader extends React.Component {
    state = {
        shouldShowDropDown: false
    }
    toggleDropDown = () => {
        this.setState((prevState)=>({ shouldShowDropDown: !prevState.shouldShowDropDown }));
    };

    render() {
        const type = getSpecialWordFromPath(history.location.pathname);
        const specialWordJSX = <span className='search-bar__header__special-word searchBarHeaderDropDown__ignoreClickOutside' onClick={this.toggleDropDown}>{type}</span>;
        return (
            <div className='search-bar__header'>
                איזה נכס {(type !== 'מסחרי' && type !== 'שותפים') && 'ל'}{specialWordJSX} תרצו לחפש?
                {this.state.shouldShowDropDown && <SearchBarHeaderDropDown toggleDropDown={this.toggleDropDown} outsideClickIgnoreClass={'searchBarHeaderDropDown__ignoreClickOutside'}/>}
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
                <div className='search-bar__header__drop-down__header'>ניתן לחפש גם:</div>
                <SearchBarHeaderDropDownItem text='מכירה' url={preFix + '/forsale'} />
                <SearchBarHeaderDropDownItem text='השכרה' url={preFix + '/rent'} />
                <SearchBarHeaderDropDownItem text='שותפים' url={preFix + '/roommates'} />
                <SearchBarHeaderDropDownItem text='מסחרי' url={preFix + '/commercial'} />
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