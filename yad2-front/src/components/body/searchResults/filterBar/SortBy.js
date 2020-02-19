import React from 'react';
import onClickOutside from 'react-onclickoutside'
import {deriveXfromViewPortX, deriveYfromViewPortY} from '../../../../utility/calculatePositions';
import resources from '../../../../resources.json';
const filterBarResources = resources.body.searchResults.filterBar;
const sortByDropDownOptions = filterBarResources.sortByDropDown;

class SortBy extends React.Component {
    state = {
        shouldShowDropDown: false,
        parentRect: undefined
    }
    componentDidMount(){
        console.log(document.getElementById('ababa').getBoundingClientRect().top);
        
        this.setState({parentRect: document.getElementById('ababa').getBoundingClientRect()});
    }
    toggleDropDown = () => {
        this.setState((prevState) => ({ shouldShowDropDown: !prevState.shouldShowDropDown }));
    }
    render() {
        return (
            <div className='sort-by__wrapper' id="ababa">
                <span>{filterBarResources.sortByButton}</span>
                <SortByDropDownButton text={sortByDropDownOptions[this.props.filters.sortBy]} toggleDropDown={this.toggleDropDown} />
                {
                    this.state.shouldShowDropDown && <SortByDropDown parentRect={this.state.parentRect} toggleDropDown={this.toggleDropDown} outsideClickIgnoreClass={'sortByDropDown__ignoreClickOutside'} />
                }
            </div>
        );
    }
}
export default SortBy;

class SortByDropDownButton extends React.Component {
    render() {
        return (
            <div className='filter-bar__sort-by__button sortByDropDown__ignoreClickOutside' onClick={this.props.toggleDropDown}>
                <span className='filter-bar__sort-by__button__text'>
                    {this.props.text}
                </span>
                <span className='bottom-arrow-icon'>
                    {resources.general.unicodeChars.downFacingArrow}
                </span>
            </div>
        );
    }
}
//{resources.general.unicodeChars.downFacingArrow}
class SortByDropDownWithoutOnclickoutside extends React.Component {
    handleClickOutside = this.props.toggleDropDown;
    render() {
        const parentRect = this.props.parentRect;
        const style = {
            left: deriveXfromViewPortX(parentRect.left)+'px',
            top: deriveYfromViewPortY(parentRect.bottom)+'px'
        }
        return (
            <div className='filter-bar__sort-by__drop-down' style={style}>
                safdsgsdggdh
            </div>
        );
    }
}
const SortByDropDown = onClickOutside(SortByDropDownWithoutOnclickoutside);
