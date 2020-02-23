import React from 'react';
import onClickOutside from 'react-onclickoutside'
import { deriveXfromViewPortX, deriveYfromViewPortY } from '../../../../utility/calculatePositions';
import resources from '../../../../resources.json';
import uuid from 'uuid';
import RadioButton from '../../../generics/RadioButton';
import { connect } from 'react-redux';
import { sortByDate, sortByPriceHighlow, sortByPriceLowHigh } from '../../../../actions/filters';
const filterBarResources = resources.body.searchResults.filterBar;
const sortByDropDownOptions = filterBarResources.sortByDropDown;

class SortBy extends React.Component {
    state = {
        shouldShowDropDown: false,
        parentRect: undefined
    }
    className = 'sort-by__wrapper';
    id = this.className + uuid();
    updateParentRect() {
        this.setState({ parentRect: document.getElementById(this.id).getBoundingClientRect() });

    }
    componentDidMount() {
        window.addEventListener('resize', () => this.updateParentRect());
        window.addEventListener('scroll', () => this.updateParentRect());
    }
    toggleDropDown = () => {
        this.updateParentRect();
        this.setState((prevState) => ({ shouldShowDropDown: !prevState.shouldShowDropDown }));
    }
    render() {
        return (
            <div className={this.className} id={this.id}>
                <span>{filterBarResources.sortByButton}</span>
                <SortByDropDownButton text={sortByDropDownOptions[this.props.filters.sortBy]} toggleDropDown={this.toggleDropDown} />
                {
                    this.state.shouldShowDropDown && <SortByDropDown parentRect={this.state.parentRect} sortBySelected={this.props.filters.sortBy} toggleDropDown={this.toggleDropDown} outsideClickIgnoreClass={'sortByDropDown__ignoreClickOutside'} />
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
        const width = parentRect.width * 0.9;
        const dropDownStyle = {
            left: deriveXfromViewPortX(parentRect.left + parentRect.width / 2 - width / 2),
            top: deriveYfromViewPortY(parentRect.bottom + 20),
            width: width
        };
        const topArrowStyle = {
            top: dropDownStyle.top - 10
        }
        return (
            <React.Fragment>
                <div className={'arrow-up'} style={topArrowStyle} />
                <div className='filter-bar__sort-by__drop-down' style={dropDownStyle}>
                    {
                        Object.keys(sortByDropDownOptions).map((key) => {
                            const text = sortByDropDownOptions[key];
                            return (
                                <button
                                    key={key}
                                    className='filter-bar__sort-by__drop-down__item sortByDropDown__ignoreClickOutside'
                                    onClick={() => this.props.sortBy(key)}>
                                    <RadioButton isChecked={key === this.props.sortBySelected} />
                                    <span>{text}</span>
                                </button>
                            );
                        })
                    }
                </div>
            </React.Fragment>
        );
    }
}
const mapDispatchToProps = (dispatch, ownProps) => ({
    sortBy: (sortByOption) => {
        ownProps.toggleDropDown();
        switch (sortByOption) {
            case 'date':
                dispatch(sortByDate());
                break;
            case 'priceHighLow':
                dispatch(sortByPriceHighlow());
                break;
            case 'priceLowHigh':
                dispatch(sortByPriceLowHigh());
                break;
            default:
                break;
        }
    }
})
const SortByDropDown = connect(undefined, mapDispatchToProps)(onClickOutside(SortByDropDownWithoutOnclickoutside));
