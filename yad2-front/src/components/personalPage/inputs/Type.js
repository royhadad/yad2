import React from 'react';
import { connect } from 'react-redux';
import { setType } from '../../../actions/itemForm';
import SearchField from '#components#/generics/SearchField';
import resources from '#resources#';
import Select from 'react-select';
const typesResources = resources.body.searchBar.typeInput.types;
const inputsResources = resources.personalPage.itemForm.inputs;

class Type extends React.Component {
    render() {
        const options = typesResources[this.props.category].map((option) => ({ value: option.value, label: option.text }));
        return (
            <div>
                <Select
                    value={options.find((option) => (option.value === this.props.type))}
                    onChange={(selectedValue) => {
                        this.props.setType(selectedValue.value);
                    }}
                    options={options}
                    placeholder={inputsResources.genericDropDownPlaceholder}
                    className='react-select'
                />
            </div>
        )
    }
}
const mapStateToProps = (state) => ({
    type: state.itemForm.item.type,
    category: state.itemForm.item.category
})
const mapDispatchToProps = (dispatch) => ({
    setType: (type) => (dispatch(setType(type)))
})

const TypeWithStore = connect(mapStateToProps, mapDispatchToProps)(Type);
export default () => (
    <SearchField metaText={inputsResources.Type.metaText} selectorJSX={<TypeWithStore />} />
)