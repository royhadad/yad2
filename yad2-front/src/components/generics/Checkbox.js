import React from 'react';
const textResources = require('#resources#');
const unicodeChars = textResources.general.unicodeChars;

/*
HOW TO USE
receives props:
option: {
    text: string,
    value: any
}
isSelected: bool
toggleOption: func(option.value)
*/

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

export default Checkbox;