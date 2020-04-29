import React from 'react';
import { connect } from 'react-redux';
import PersonalPage from './PersonalPage';
import ItemForm from './ItemForm';
import { startAddItem } from '../../actions/itemForm';
import resources from '#resources#';
const addItemResources = resources.personalPage.addItem;

class AddItem extends React.Component {
    render() {
        return (
            <div className='add-item__wrapper'>
                <h1>{addItemResources.header}</h1>
                <ItemForm
                    onSubmit={startAddItem}
                    onSubmitText={addItemResources.onSubmitText}
                    successText={addItemResources.updatedSuccessfully}
                />
            </div>
        );
    }
}
const mapStateToProps = (state) => ({
})
const mapDispatchToProps = (dispatch) => ({

})
const Body = connect(mapStateToProps, mapDispatchToProps)(AddItem);
export default () => (<PersonalPage childComponent={Body} selected={'new'} />);