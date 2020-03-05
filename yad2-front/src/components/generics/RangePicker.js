import React from 'react';
import onClickOutSide from 'react-onclickoutside';
import resources from '../../resources.json';
const unicodeChars = resources.general.unicodeChars;
const allValue = 'הכל';
/*
HOW TO USE
recieves props:
placeholder: string
fromOptions: any[]
toOptions: any[]
dispatchTo: func(any)
dispatchFrom: func(any)
*/

class RangePicker extends React.Component {
    state = {
        shouldShowDropDown: false,
        from: this.props.from,
        to: this.props.to
    }
    toggleShouldShowDropDown = () => {
        this.setState((prevState) => ({
            shouldShowDropDown: !prevState.shouldShowDropDown
        }));
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
                <div className={'range-picker__field RangePickerDropDown__outsideClickIgnoreClass'} onClick={this.toggleShouldShowDropDown}>
                    {this.getPlaceholderText()}
                    <span>{unicodeChars[this.state.shouldShowDropDown ? 'upFacingArrow' : 'downFacingArrow']}</span>
                </div>
                {
                    this.state.shouldShowDropDown
                    &&
                    <RangePickerDropDown
                        fromOptions={this.getCleanFromOptions()}
                        toOptions={this.getCleanToOptions()}
                        toggleShouldShowDropDown={this.toggleShouldShowDropDown}
                        outsideClickIgnoreClass={'RangePickerDropDown__outsideClickIgnoreClass'}
                        from={this.state.from}
                        to={this.state.to}
                        setFrom={this.setFrom}
                        setTo={this.setTo}
                    />
                }
            </div>
        );
    }
}

export default RangePicker;

class RangePickerDropDownWithOutOnClickOutside extends React.Component {
    handleClickOutside = this.props.toggleShouldShowDropDown;
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

    render() {
        return (
            <div className={'range-picker__dropdown__wrapper'}>
                <div className={'range-picker__button__wrapper'}>
                    <div className={'input clickable range-picker__button RangePickerToDropDown__outsideClickIgnoreClass'} onClick={this.toggleShouldShowToDropDown}>
                        {this.props.to ? <span style={{ color: '#363636' }}>{this.props.to}</span> : 'עד-'}
                        <span>{unicodeChars[this.state.shouldShowToDropDown ? 'upFacingArrow' : 'downFacingArrow']}</span>
                    </div>
                    {
                        this.state.shouldShowToDropDown
                        &&
                        <React.Fragment>
                            <div className={'arrow-up__with-top-border'} style={{ top: 62 }} />
                            <RangePickerOptionsDropDown
                                selected={this.props.to}
                                options={this.props.toOptions}
                                setOption={this.props.setTo}
                                toggleShouldShowDropDown={this.toggleShouldShowToDropDown}
                                outsideClickIgnoreClass={'RangePickerToDropDown__outsideClickIgnoreClass'} />
                        </React.Fragment>
                    }
                </div>
                <div className={'range-picker__button__wrapper'}>
                    <div className={'range-picker__button RangePickerFromDropDown__outsideClickIgnoreClass'} onClick={this.toggleShouldShowFromDropDown}>
                        {this.props.from ? <span style={{ color: '#363636' }}>{this.props.from}</span> : 'מ-'}
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
                                outsideClickIgnoreClass={'RangePickerFromDropDown__outsideClickIgnoreClass'} />
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
                    this.props.options.map((option) => (
                        <div
                            className={'range-picker__option'}
                            key={option === undefined ? -1 : option}
                            onClick={() => { this.props.setOption(option) }}
                            style={this.props.selected === option ? { fontWeight: 600 } : {}}
                        >
                            {option === undefined ? allValue : option}
                        </div>
                    ))
                }
            </div>
        );
    }
}
const RangePickerOptionsDropDown = onClickOutSide(RangePickerOptionsDropDownWithOutOnClickOutside);