import React from 'react';
import onClickOutSide from 'react-onclickoutside';
import resources from '../../resources.json';
const unicodeChars = resources.general.unicodeChars;
const textData = resources.general.generics.RangePicker;
/*
HOW TO USE
receives props:
placeholder: string
fromOptions: any[]
toOptions: any[]
dispatchTo: func(any)
dispatchFrom: func(any)
uuid: string
optional: minusOneValue //the value that is displayed instead of the number -1, if it exists
*/

class RangePicker extends React.Component {
    state = {
        from: this.props.from,
        to: this.props.to
    }
    setFrom = (optionValue) => {
        this.setState(() => ({ from: optionValue }), () => this.props.dispatchFrom(this.state.from));
    }
    setTo = (optionValue) => {
        this.setState(() => ({ to: optionValue }), () => this.props.dispatchTo(this.state.to));
    }
    getPlaceholderText = () => {
        if (this.state.to === undefined && this.state.from === undefined) {
            return this.props.placeholder;
        } else if (this.state.to !== undefined && this.state.from !== undefined) {
            return this.state.from + ' - ' + this.state.to;
        } else if (this.state.from !== undefined) {
            return 'מ-' + this.state.from;
        } else {
            return 'עד-' + this.state.to;
        }
    }
    getCleanFromOptions = () => {
        if (this.state.to === undefined) {
            return [undefined, ...this.props.fromOptions];
        } else {
            return [undefined, ...this.props.fromOptions.filter((fromOption) => fromOption <= this.state.to)];
        }
    }
    getCleanToOptions = () => {
        if (this.state.from === undefined) {
            return [undefined, ...this.props.toOptions];
        } else {
            return [undefined, ...this.props.toOptions.filter((toOption) => toOption >= this.state.from)];
        }
    }
    render() {
        return (
            <div>
                <RangePickerDropDown
                    fromOptions={this.getCleanFromOptions()}
                    toOptions={this.getCleanToOptions()}
                    toggleShouldShowDropDown={this.toggleShouldShowDropDown}
                    from={this.state.from}
                    to={this.state.to}
                    setFrom={this.setFrom}
                    setTo={this.setTo}
                    uuid={this.props.uuid + 'child'}
                    minusOneValue={this.props.minusOneValue}
                />
            </div>
        );
    }
}

export default RangePicker;

class RangePickerDropDown extends React.Component {
    state = {
        shouldShowToDropDown: false,
        shouldShowFromDropDown: false
    }
    toggleShouldShowFromDropDown = () => {
        this.setState((prevState) => ({
            shouldShowFromDropDown: !prevState.shouldShowFromDropDown
        }));
    }
    toggleShouldShowToDropDown = () => {
        this.setState((prevState) => ({
            shouldShowToDropDown: !prevState.shouldShowToDropDown
        }));
    }
    getPlaceholderTextByOptionValue = (option, isFrom) => {
        if (option === undefined) {
            return <span className='range-picker__button__placeholder'>{isFrom ? textData.fromPlaceholder : textData.toPlaceholder}</span>
        }
        return <span className='range-picker__button__selected-option'>{option === -1 ? this.props.minusOneValue : option}</span>
    }

    render() {
        const onClickOutsideIgnoreClassFrom = 'RangePickerToDropDown__outsideClickIgnoreClass' + this.props.uuid + '1';
        const onClickOutsideIgnoreClassTo = 'RangePickerToDropDown__outsideClickIgnoreClass' + this.props.uuid + '2';
        return (
            <div className={'range-picker-simple__button__wrapper'}>
                <div className={'range-picker-simple__button__wrapper'}>
                    <div className={'range-picker-simple__button ' + onClickOutsideIgnoreClassTo} onClick={this.toggleShouldShowToDropDown}>
                        {this.getPlaceholderTextByOptionValue(this.props.to, false)}
                        <span>{unicodeChars[this.state.shouldShowToDropDown ? 'upFacingArrow' : 'downFacingArrow']}</span>
                    </div>
                    {
                        this.state.shouldShowToDropDown
                        &&
                        <React.Fragment>
                            <RangePickerOptionsDropDown
                                selected={this.props.to}
                                options={this.props.toOptions}
                                setOption={this.props.setTo}
                                toggleShouldShowDropDown={this.toggleShouldShowToDropDown}
                                outsideClickIgnoreClass={onClickOutsideIgnoreClassTo}
                                minusOneValue={this.props.minusOneValue}
                            />
                        </React.Fragment>
                    }
                </div>
                <div className={'range-picker-simple__button__wrapper'}>
                    <div className={'range-picker-simple__button ' + onClickOutsideIgnoreClassFrom} onClick={this.toggleShouldShowFromDropDown}>
                        {this.getPlaceholderTextByOptionValue(this.props.from, true)}
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
                                outsideClickIgnoreClass={onClickOutsideIgnoreClassFrom}
                                minusOneValue={this.props.minusOneValue}
                            />
                        </React.Fragment>
                    }
                </div>
            </div>
        );
    }
}

class RangePickerOptionsDropDownWithOutOnClickOutside extends React.Component {
    handleClickOutside = this.props.toggleShouldShowDropDown;
    getTextByOptionValue = (option) => {
        if (option === undefined) {
            return textData.allTextValue;
        }
        if (option === -1) {
            return this.props.minusOneValue;
        }
        return option;
    }
    render() {
        return (
            <div className={'range-picker-simple__options__dropdown'} style={{ top: 72 }}>
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
                            {this.getTextByOptionValue(option)}
                        </div>
                    ))
                }
            </div>
        );
    }
}
const RangePickerOptionsDropDown = onClickOutSide(RangePickerOptionsDropDownWithOutOnClickOutside);