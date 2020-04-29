import React from 'react';
import { connect } from 'react-redux';
import { setFloor } from '../../../actions/itemForm';
import SearchField from '#components#/generics/SearchField';
import resources from '#resources#';
import Select from 'react-select';

const inputsResources = resources.personalPage.itemForm.inputs;
const getOptionsArr = () => {
    const options = [];
    options.push({ value: -1, label: "מרתף/פרטר" });
    for (let i = 0; i <= 17; i++) {
        options.push({ value: i, label: i });
    }
    return options;
};
const options = getOptionsArr();

class Floor extends React.Component {
    render() {
        return (
            <div>
                <Select
                    value={options.find((option) => (option.value === this.props.floor))}
                    onChange={(selectedValue) => {
                        this.props.setFloor(selectedValue.value);
                    }}
                    options={options}
                    placeholder={'בחר'}
                    className='react-select'
                />
            </div>
        )
    }
}
const mapStateToProps = (state) => ({
    floor: state.itemForm.item.floor
})
const mapDispatchToProps = (dispatch) => ({
    setFloor: (floor) => (dispatch(setFloor(floor)))
})

const FloorWithStore = connect(mapStateToProps, mapDispatchToProps)(Floor);
export default () => (
    <SearchField metaText={'קומה'} selectorJSX={<FloorWithStore />} />
)