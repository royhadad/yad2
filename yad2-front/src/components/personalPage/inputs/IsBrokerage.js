import React from 'react';
import { connect } from 'react-redux';
import { toggleIsBrokerage } from '../../../actions/itemForm';
import Checkbox from '../../generics/Checkbox';

class IsBrokerage extends React.Component {
    state = {
        focused: false
    }
    render() {
        return (
            <div className='is-brokerage__wrapper'>
                <Checkbox
                    option={{ text: 'נכס מתיווך', value: '1' }}
                    isSelected={this.props.isBrokerage}
                    toggleOption={(value) => {
                        this.props.toggleIsBrokerage();
                    }}
                />
            </div>
        )
    }
}
const mapStateToProps = (state) => ({
    isBrokerage: state.itemForm.item.isBrokerage
})
const mapDispatchToProps = (dispatch) => ({
    toggleIsBrokerage: () => (dispatch(toggleIsBrokerage()))
})
export default connect(mapStateToProps, mapDispatchToProps)(IsBrokerage);