import React from 'react';
import onClickOutSide from 'react-onclickoutside';
import resources from '#resources#';
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
                        fromOptions={this.getCleanFromOptions()}
                        toOptions={this.getCleanToOptions()}
                        toggleShouldShowDropDown={this.toggleShouldShowDropDown}
                        outsideClickIgnoreClass={ignoreClickOutsideClass}
                        from={this.state.from}
                        to={this.state.to}
                        setFrom={this.setFrom}
                        setTo={this.setTo}
                        uuid={this.props.uuid + 'child'}
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
        const onClickOutsideIgnoreClassFrom = 'RangePickerToDropDown__outsideClickIgnoreClass' + this.props.uuid + '1';
        const onClickOutsideIgnoreClassTo = 'RangePickerToDropDown__outsideClickIgnoreClass' + this.props.uuid + '2';
        return (
            <div className={'range-picker__dropdown__wrapper'}>
                <div className={'range-picker__button__wrapper'}>
                    <div className={'range-picker__button ' + onClickOutsideIgnoreClassTo} onClick={this.toggleShouldShowToDropDown}>
                        {
                            this.props.to
                                ?
                                <span className='range-picker__button__selected-option'>{this.props.to}</span>
                                :
                                <span className='range-picker__button__placeholder'>{textData.toPlaceholder}</span>
                        }
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
                                outsideClickIgnoreClass={onClickOutsideIgnoreClassTo} />
                        </React.Fragment>
                    }
                </div>
                <div className={'range-picker__button__wrapper'}>
                    <div className={'range-picker__button ' + onClickOutsideIgnoreClassFrom} onClick={this.toggleShouldShowFromDropDown}>
                        {
                            this.props.from
                                ?
                                <span className='range-picker__button__selected-option'>{this.props.from}</span>
                                :
                                <span className='range-picker__button__placeholder'>{textData.fromPlaceholder}</span>
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
                                outsideClickIgnoreClass={onClickOutsideIgnoreClassFrom} />
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
                            {option === undefined ? textData.allTextValue : option}
                        </div>
                    ))
                }
            </div>
        );
    }
}
const RangePickerOptionsDropDown = onClickOutSide(RangePickerOptionsDropDownWithOutOnClickOutside);