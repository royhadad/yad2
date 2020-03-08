import React from 'react';

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
    deriveStringFromNumber = (num) => {
        if (num === undefined) {
            return '';
        }
        let str = num.toString();
        let res = '';
        for (let index = str.length - 1, counter = 0; index >= 0; index-- , counter++) {
            res += (counter % 3 === 0 && index !== str.length - 1) ? ',' : '';
            res += str[index];
        }
        res = res.split('').reverse().join('');
        return res;
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
                <input placeholder={this.props.fromPlaceholder} value={this.deriveStringFromNumber(this.props.from)} onChange={this.dispatchFrom} />
                <input placeholder={this.props.toPlaceholder} value={this.deriveStringFromNumber(this.props.to)} onChange={this.dispatchTo} />
            </div>
        );
    }
}
export default RangeInput;