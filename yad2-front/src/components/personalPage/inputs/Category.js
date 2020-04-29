import React from 'react';
import { connect } from 'react-redux';
import { setCategory } from '../../../actions/itemForm';
import SearchField from '#components#/generics/SearchField';
import resources from '#resources#';
import Select from 'react-select';

const inputsResources = resources.personalPage.itemForm.inputs;
const categories = resources.general.propertyTypes;

const getOptionsArr = () => {
    const options = [];
    Object.keys(categories).forEach((key) => {
        options.push({ value: key, label: categories[key] });
    })
    return options;
};
const options = getOptionsArr();

class Category extends React.Component {
    render() {
        return (
            <Select
                value={options.find((option) => (option.value === this.props.category))}
                onChange={(selectedValue) => {
                    this.props.setCategory(selectedValue.value);
                }}
                options={options}
                placeholder={'בחר'}
                className='react-select'
            />
        )
    }
}
const mapStateToProps = (state) => ({
    category: state.itemForm.item.category
})
const mapDispatchToProps = (dispatch) => ({
    setCategory: (category) => (dispatch(setCategory(category)))
})

const CategoryWithStore = connect(mapStateToProps, mapDispatchToProps)(Category);
export default () => (
    <SearchField metaText={'קטגוריה'} selectorJSX={<CategoryWithStore />} />
)