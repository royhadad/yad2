import React from 'react';
import onClickOutSide from 'react-onclickoutside';
import resources from '#resources#';
const unicodeChars = resources.general.unicodeChars;
/*
HOW TO USE
receives props:
placeholder: string
options: any[]
dispatchSelectedOption: func(any)
uuid: string
*/

class QuantitySelector extends React.Component {
    state = {
        shouldShowDropDown: false,
        selectedOption: this.props.selectedOption,
    }
    toggleShouldShowDropDown = () => {
        this.setState((prevState) => ({
            shouldShowDropDown: !prevState.shouldShowDropDown
        }));
    }
    setSelectedOption = (optionValue) => {
        this.setState(() => ({ selectedOption: optionValue }), () => this.props.dispatchSelectedOption(this.state.selectedOption));
    }
    getPlaceholderText = () => {
        if (this.state.selectedOption === undefined) {
            return this.props.placeholder;
        }
    }

    render() {
        const ignoreClickOutsideClass = 'RangePickerDropDown__outsideClickIgnoreClass' + this.props.uuid;
        return (
            <div>
                <div className={'range-picker__field ' + ignoreClickOutsideClass} onClick={this.toggleShouldShowDropDown}>
                    {this.getPlaceholderText()}
                    <span>{unicodeChars[this.state.shouldShowDropDown ? 'upFacingArrow' : 'downFacingArrow']}</span>
                </div>
                {
                    this.state.shouldShowDropDown
                    &&
                    <RangePickerDropDown
                        options={this.props.options}
                        toggleShouldShowDropDown={this.toggleShouldShowDropDown}
                        outsideClickIgnoreClass={ignoreClickOutsideClass}
                        selectedOption={this.state.selectedOption}
                        setSelectedOption={this.setSelectedOption}
                        uuid={this.props.uuid + 'child'}
                    />
                }
            </div>
        );
    }
}

export default QuantitySelector;

class RangePickerDropDownWithOutOnClickOutside extends React.Component {
    handleClickOutside = this.props.toggleShouldShowDropDown;
    state = {
        shouldShowToDropDown: false,
        shouldShowOptionsDropDown: false
    }
    toggleShouldShowOptionsDropDown = () => {
        this.setState((prevState) => ({
            shouldShowOptionsDropDown: !prevState.shouldShowOptionsDropDown
        }));
    }

    render() {
        const onClickOutsideIgnoreClass = 'RangePickerToDropDown__outsideClickIgnoreClass' + this.props.uuid + '1';
        return (
            <div className={'range-picker__dropdown__wrapper'}>
                <div className={'range-picker__button__wrapper'}>
                    <div className={'range-picker__button ' + onClickOutsideIgnoreClass} onClick={this.toggleShouldShowFromDropDown}>
                        {
                            this.props.selectedOption
                                ?
                                <span className='range-picker__button__selected-option'>{this.props.selectedOption}</span>
                                :
                                <span className='range-picker__button__placeholder'>{this.props.placeholder}</span>
                        }
                        <span>{unicodeChars[this.state.shouldShowFromDropDown ? 'upFacingArrow' : 'downFacingArrow']}</span>
                    </div>
                    {
                        this.state.shouldShowFromDropDown
                        &&
                        <React.Fragment>
                            <div className={'arrow-up__with-top-border'} style={{ top: 62 }} />
                            <RangePickerOptionsDropDown
                                selected={this.props.from}
                                options={this.props.fromOptions}
                                setOption={this.props.setFrom}
                                toggleShouldShowDropDown={this.toggleShouldShowFromDropDown}
                                outsideClickIgnoreClass={onClickOutsideIgnoreClass} />
                        </React.Fragment>
                    }
                </div>
            </div>
        );
    }
}
const RangePickerDropDown = onClickOutSide(RangePickerDropDownWithOutOnClickOutside);

class RangePickerOptionsDropDownWithOutOnClickOutside extends React.Component {
    handleClickOutside = this.props.toggleShouldShowDropDown;

    render() {
        return (
            <div className={'range-picker__options__dropdown'} style={{ top: 72 }}>
                {
                    this.props.options.map((option, index) => (
                        <div
                            className={'range-picker__option'}
                            key={index}
                            onClick={() => {
                                this.props.setOption(option);
                                this.props.toggleShouldShowDropDown();
                            }}
                            style={this.props.selected === option ? { fontWeight: 600 } : {}}
                        >
                        </div>
                    ))
                }
            </div>
        );
    }
}
const RangePickerOptionsDropDown = onClickOutSide(RangePickerOptionsDropDownWithOutOnClickOutside);