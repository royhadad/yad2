import React from 'react';
import deriveStringFromNumber from '#src#/utility/deriveStringFromNumber';
/*
HOW TO USE
receives props:
from: number
to: number
fromPlaceholder: string
toPlaceholder: string
dispatchFrom: func(number)
dispatchTo: func(number)
*/

class RangeInput extends React.Component {
    deriveNumberFromString = (str) => {
        if (str === '') {
            return undefined;
        }
        return parseInt(str.replace(/,/g, ''));
    }
    dispatchFrom = (e) => {
        const number = this.deriveNumberFromString(e.target.value);
        if (!isNaN(number) || number === undefined) {
            this.props.dispatchFrom(number);
        }
    }
    dispatchTo = (e) => {
        const number = this.deriveNumberFromString(e.target.value);
        if (!isNaN(number) || number === undefined) {
            this.props.dispatchTo(number);
        }
    }
    render() {
        return (
            <div className='range-input__wrapper'>
                <input placeholder={this.props.fromPlaceholder} value={deriveStringFromNumber(this.props.from)} onChange={this.dispatchFrom} />
                <input placeholder={this.props.toPlaceholder} value={deriveStringFromNumber(this.props.to)} onChange={this.dispatchTo} />
            </div>
        );
    }
}
export default RangeInput;