import React from 'react';
import onClickOutside from 'react-onclickoutside'
import Checkbox from './Checkbox';
const textResources = require('../../resources.json');
const unicodeChars = textResources.general.unicodeChars;

/*
HOW TO USE
receives props:
options: {value: string, text: string}[]
selectedOptions: [] string
dispatchAddOption: func(option)
dispatchRemoveOption: func(option)
placeholder: string
expandText: string
collapseText: string
uuid: string
*/

class Type extends React.Component {
    state = {
        shouldShowDropDown: false,
        isExpanded: false
    };
    toggleShouldShowDropDown = () => {
        this.setState((prevState) => ({ shouldShowDropDown: !prevState.shouldShowDropDown }));
    }
    toggleOption = (optionValue) => {
        if (this.props.selectedOptions.includes(optionValue)) {
            this.props.dispatchRemoveOption(optionValue);
        } else {
            this.props.dispatchAddOption(optionValue);
        }
    }
    toggleIsExpanded = () => {
        this.setState((prevState => ({
            isExpanded: !prevState.isExpanded
        })));
    }
    render() {
        const ignoreClickOutsideClass = 'options-picker__dropdown__wrapper__ignoreClickOutside'+this.props.uuid;
        return (
            <div className='.search-field__wrapper'>
                <div
                    className={'type-button-field '+ignoreClickOutsideClass}
                    style={this.props.selectedOptions.length > 0 ? { color: 'black' } : {}}
                    onClick={this.toggleShouldShowDropDown}
                >
                    {this.props.placeholder}
                    <span>{unicodeChars[this.state.shouldShowDropDown ? 'upFacingArrow' : 'downFacingArrow']}</span>
                </div>
                {
                    this.state.shouldShowDropDown
                    &&
                    <TypeDropDown
                        toggleOption={this.toggleOption}
                        selectedOptions={this.props.selectedOptions}
                        options={this.props.options}
                        category={this.props.category}
                        isExpanded={this.state.isExpanded}
                        toggleIsExpanded={this.toggleIsExpanded}
                        toggleShouldShowDropDown={this.toggleShouldShowDropDown}
                        outsideClickIgnoreClass={ignoreClickOutsideClass}
                        expandText={this.props.expandText}
                        collapseText={this.props.collapseText}
                    />
                }
            </div>
        );
    }
}
export default Type;

class TypeDropDownWithoutOnClickOutside extends React.Component {
    handleClickOutside = this.props.toggleShouldShowDropDown;
    render() {
        let options = this.props.options;
        if (!this.props.isExpanded) {
            options = options.slice(0, 6);
        }
        const style = { width: Math.ceil(options.length / 6) * 180 };
        return (
            <div className='type__dropdown__wrapper' style={style}>
                <div className='type__dropdown__container'>
                    {
                        options.map((option) => (
                            <Checkbox
                                key={option.text}
                                option={option}
                                toggleOption={this.props.toggleOption}
                                isSelected={this.props.selectedOptions.includes(option.value)} />))
                    }
                </div>
                <p onClick={this.props.toggleIsExpanded}>{this.props.isExpanded ? this.props.collapseText : this.props.expandText}</p>
            </div>
        );
    }
}
const TypeDropDown = onClickOutside(TypeDropDownWithoutOnClickOutside);