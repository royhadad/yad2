import React from 'react';
import { connect } from 'react-redux';
import { setIsCommercialSale } from '../../../actions/itemForm';
import SearchField from '#components#/generics/SearchField';
import resources from '#resources#';
import Select from 'react-select';

const dealTypes = resources.body.searchBar.dealTypeInput;
const getOptionsArr = () => {
    const options = dealTypes.types.map((type) => ({ value: type.value, label: type.text }));
    return options;
};
const options = getOptionsArr();

class DealType extends React.Component {
    render() {
        return (
            <div>
                <Select
                    value={options.find((option) => (option.value === this.props.rooms))}
                    onChange={(selectedValue) => {
                        this.props.setIsCommercialSale(selectedValue.value === 'forsale');
                    }}
                    options={options}
                    placeholder={dealTypes.placeholder}
                    className='react-select'
                />
            </div>
        )
    }
}
const mapStateToProps = (state) => ({
    isCommercialSale: state.itemForm.item.isCommercialSale
})
const mapDispatchToProps = (dispatch) => ({
    setIsCommercialSale: (isCommercialSale) => (dispatch(setIsCommercialSale(isCommercialSale)))
})

const DealTypeWithStore = connect(mapStateToProps, mapDispatchToProps)(DealType);
export default () => (
    <SearchField metaText={dealTypes.metaText} selectorJSX={<DealTypeWithStore />} />
)