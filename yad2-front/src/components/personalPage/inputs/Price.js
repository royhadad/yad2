import React from 'react';
import { connect } from 'react-redux';
import { setPrice } from '../../../actions/itemForm';
import SearchField from '#components#/generics/SearchField';
import resources from '#resources#';

const inputsResources = resources.personalPage.itemForm.inputs;

class Price extends React.Component {
    render() {
        return (
            <input
                type="text"
                pattern="[0-9]*"
                value={this.props.price || ''}
                onChange={(e) => {
                    let newValue = e.target.value;
                    if (newValue === '') {
                        this.props.setPrice(undefined);
                    } else {
                        newValue = parseInt(e.target.value);
                        if (newValue && newValue >= 1 && newValue <= 100000000) {
                            this.props.setPrice(newValue);
                        }
                    }
                }}
                className='input'
            />
        )
    }
}
const mapStateToProps = (state) => ({
    price: state.itemForm.item.price
})
const mapDispatchToProps = (dispatch) => ({
    setPrice: (price) => (dispatch(setPrice(price)))
})

const PriceWithStore = connect(mapStateToProps, mapDispatchToProps)(Price);
export default () => (
    <SearchField metaText={inputsResources.Price.metaText} selectorJSX={<PriceWithStore />} />
)