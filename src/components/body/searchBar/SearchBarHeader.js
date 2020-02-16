import React from 'react';

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
        return (
            <div className='search-bar__header__drop-down__wrapper'>
                <div className='search-bar__header__drop-down__header'>ניתן לחפש גם:</div>
                <SearchBarHeaderDropDownItem text='מכירה' url='url' />
                <SearchBarHeaderDropDownItem text='השכרה' url='url' />
                <SearchBarHeaderDropDownItem text='שותפים' url='url' />
                <SearchBarHeaderDropDownItem text='מסחרי' url='url' />
            </div>
        );
    }
}

const SearchBarHeaderDropDownItem = ({ text, url }) => {
    return (
        <div className='search-bar__header__drop-down__item'>
            <a href={url}>
                {text}
            </a>
        </div>
    );
}