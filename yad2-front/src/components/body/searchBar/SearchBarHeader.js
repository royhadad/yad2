import React from 'react';
import {Link} from 'react-router-dom';

class SearchBarHeader extends React.Component {
    state = {
        shouldShowDropDown: false
    }
    onClick = () => {
        this.setState((prevState) => ({ shouldShowDropDown: !prevState.shouldShowDropDown }));
    };

    render() {
        const type = 'מכירה';
        const specialWordJSX = <span className='search-bar__header__special-word' onClick={this.onClick}>{type}</span>;
        return (
            <div className='search-bar__header'>
                איזה נכס ל{specialWordJSX} תרצו לחפש?
                {this.state.shouldShowDropDown && <SearchBarHeaderDropDown />}
            </div>
        );
    }
}

export default SearchBarHeader;

class SearchBarHeaderDropDown extends React.Component {
    render() {
        const preFix='/realestate';
        return (
            <div className='search-bar__header__drop-down__wrapper'>
                <div className='search-bar__header__drop-down__header'>ניתן לחפש גם:</div>
                <SearchBarHeaderDropDownItem text='מכירה' url={preFix+'/forsale'} />
                <SearchBarHeaderDropDownItem text='השכרה' url={preFix+'/rent'} />
                <SearchBarHeaderDropDownItem text='שותפים' url={preFix+'/roommates'} />
                <SearchBarHeaderDropDownItem text='מסחרי' url={preFix+'/commercial'} />
            </div>
        );
    }
}

const SearchBarHeaderDropDownItem = ({ text, url }) => {
    return (
        <div className='search-bar__header__drop-down__item'>
            <Link to={url}>
                {text}
            </Link>
        </div>
    );
}