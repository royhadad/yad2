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
import ImageDeletion from './inputs/ImageDeletion';
import ImageUpload from './inputs/ImageUpload';
import resources from '#resources#';
const itemFormResources = resources.personalPage.itemForm;

//PROPS:
//onSubmit: function
//onSubmitText: string
//item: item (optional)
//successText: string
export class ItemForm extends React.Component {
    constructor(props) {
        super(props);
        this.enableButtons = this.enableButtons.bind(this);
        this.disableButtons = this.disableButtons.bind(this);
        this.submitButtonRef = React.createRef();
        if (props.isEdit) {
            this.deleteButtonRef = React.createRef();
        }
    }
    componentDidMount() {
        window.scrollTo(0, 0);
        this.props.resetToDefault();
        if (this.props.item) {
            this.props.setItem(this.props.item);
        }
        this.enableButtons();
    }

    disableButtons() {
        if (this.submitButtonRef.current) {
            this.submitButtonRef.current.onclick = undefined;
        }
        if (this.props.isEdit && this.deleteButtonRef.current) {
            this.deleteButtonRef.current.onclick = undefined;
        }
    }

    enableButtons() {
        if (this.submitButtonRef.current) {
            this.submitButtonRef.current.onclick = async () => {
                this.disableButtons();
                await this.props.onSubmit();
                this.enableButtons();
            }
        }

        if (this.props.isEdit && this.deleteButtonRef.current) {
            this.deleteButtonRef.current.onclick = async () => {
                this.disableButtons();
                await this.props.startDeleteItem();
                this.enableButtons();
            }
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
                <BottomFields item={this.props.item} />
                {
                    this.props.isEdit && (
                        <ImageDeletion />
                    )
                }
                <div className='item-form__buttonsWrapper'>
                    <div className='item-form__submit-button' ref={this.submitButtonRef}>
                        {this.props.onSubmitText}
                    </div>
                    {this.props.isEdit && (
                        <div className='item-form__delete-button' ref={this.deleteButtonRef}>
                            {itemFormResources.onDeleteText}
                        </div>
                    )}
                </div>

                <p style={{ color: 'red', margin: '3rem 0px' }}>{this.props.error}</p>
            </div >
        );
    }
}
const mapStateToProps = (state) => ({
    category: (state.itemForm.item.category),
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
    'bottomFields': (props) => {
        return (
            <React.Fragment>
                <Text />
                <Properties />
                <ImageUpload item={props.item} />
            </React.Fragment>
        )
    }
}