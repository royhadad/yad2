import React from 'react';
import { connect } from 'react-redux';
const textResources = require('../../../../resources.json');
const typeInput = textResources.body.searchBar.typeInput;
const unicodeChars = textResources.general.unicodeChars;

class Type extends React.Component {
    state = {
        selectedOptions: [],
        shouldShowDropDown: false,
        isExpanded: false
    };
    toggleShouldShowDropDown = () => {
        this.setState((prevState) => ({ shouldShowDropDown: !prevState.shouldShowDropDown }));
    }
    toggleOption = (optionValue) => {
        this.setState((prevState) => {
            if (prevState.selectedOptions.includes(optionValue)) {
                return {
                    selectedOptions: prevState.selectedOptions.filter((option) => option !== optionValue)
                }
            } else {
                return {
                    selectedOptions: [...prevState.selectedOptions, optionValue]
                }
            }
        });
    }
    toggleIsExpanded = () => {
        this.setState((prevState => ({
            isExpanded: !prevState.isExpanded
        })));
    }
    render() {
        return (
            <div className='.search-field__wrapper'>
                <div
                    className='input'
                    style={this.state.selectedOptions.length > 0 ? { color: 'black' } : {}}
                    onClick={this.toggleShouldShowDropDown}
                >
                    {typeInput.placeholder}
                </div>
                {
                    this.state.shouldShowDropDown
                    &&
                    <TypeDropDown
                        toggleOption={this.toggleOption}
                        selectedOptions={this.state.selectedOptions}
                        category={this.props.category}
                        isExpanded={this.state.isExpanded}
                        toggleIsExpanded={this.toggleIsExpanded}
                    />
                }
            </div>
        );
    }
}
const mapStateToProps = (state) => ({
    category: state.filters.search.category
});
export default connect(mapStateToProps)(Type);

class TypeDropDown extends React.Component {
    render() {
        let options = typeInput.types[this.props.category];
        if (!this.props.isExpanded) {
            options = options.slice(0, 6);
        }
        return (
            <div className='type__dropdown__wrapper'>
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
                <p onClick={this.props.toggleIsExpanded}>{this.props.isExpanded ? typeInput.expandButtonText.collapse : typeInput.expandButtonText.expand}</p>
            </div>
        );
    }
}

class Checkbox extends React.Component {
    render() {
        return (
            <div className={this.props.isSelected ? 'checkbox__wrapper__selected' : 'checkbox__wrapper__unselected'} onClick={() => this.props.toggleOption(this.props.option.value)}>
                <div className='checkbox__icon'>{this.props.isSelected && unicodeChars.checkmark}</div>
                {this.props.option.text}
            </div>
        );
    }
}