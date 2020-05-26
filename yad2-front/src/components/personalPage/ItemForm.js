import React from 'react';
import { connect } from 'react-redux';
import { setItem, setError, setLocation, resetToDefault } from '../../actions/itemForm';
import Category from './inputs/Category';
import EntryDate from './inputs/EntryDate';
import Floor from './inputs/Floor';
import Location from './inputs/Location';
import Price from './inputs/Price';
import Properties from './inputs/Properties';
import Roommates from './inputs/Roommates';
import Rooms from './inputs/Rooms';
import Size from './inputs/Size';
import Text from './inputs/Text';
import Type from './inputs/Type';
import IsBrokerage from './inputs/IsBrokerage';
import DealType from './inputs/DealType';
import ImageUpload from './inputs/ImageUpload';
import resources from '#resources#';
const itemFormResources = resources.personalPage.itemForm;

//PROPS:
//onSubmit: function
//onSubmitText: string
//item: item (optional)
//successText: string
class ItemForm extends React.Component {
    componentDidMount() {
        window.scrollTo(0, 0);
        this.props.resetToDefault();
        if (this.props.item) {
            this.props.setItem(this.props.item);
        }
    }

    render() {
        const UniqueFields = formBody[this.props.category];
        const SharedFields = formBody.shared;
        const BottomFields = formBody.bottomFields;
        return (
            <div className='item-form'>
                <SharedFields />
                <UniqueFields />
                <BottomFields />
                <div className='item-form__buttonsWrapper'>
                    <div className='item-form__submit-button' onClick={this.props.onSubmit}>
                        {this.props.onSubmitText}
                    </div>
                    {this.props.isEdit && (
                        <div className='item-form__delete-button' onClick={this.props.startDeleteItem}>
                            {itemFormResources.onDeleteText}
                        </div>
                    )}
                </div>

                <p style={{ color: 'red', margin: '30px 0px' }}>{this.props.error}</p>
            </div >
        );
    }
}
const mapStateToProps = (state) => ({
    category: state.itemForm.item.category,
    error: state.itemForm.error
})
const mapDispatchToProps = (dispatch) => ({
    setItem: (item) => (dispatch(setItem(item))),
    setLocation: (location) => (dispatch(setLocation(location))),
    setError: (error) => (dispatch(setError(error))),
    resetToDefault: () => (dispatch(resetToDefault()))
});
export default connect(mapStateToProps, mapDispatchToProps)(ItemForm);

const formBody = {
    'forsale': () => (
        <React.Fragment>
            <Type />
            <IsBrokerage />
        </React.Fragment>
    ),
    'rent': () => (
        <React.Fragment>
            <Type />
        </React.Fragment>
    ),
    'roommates': () => (
        <React.Fragment>
            <Roommates />
        </React.Fragment>
    ),
    'commercial': () => (
        <React.Fragment>
            <DealType />
            <Type />
            <IsBrokerage />
        </React.Fragment>
    ),
    'shared': () => (
        <React.Fragment>
            <Category />
            <Location />
            <Price />
            <Size />
            <EntryDate />
            <Floor />
            <Rooms />
        </React.Fragment>
    ),
    'bottomFields': () => (
        <React.Fragment>
            <Text />
            <Properties />
            <ImageUpload />
        </React.Fragment>
    )
}