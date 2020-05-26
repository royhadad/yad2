import React from 'react';
import { connect } from 'react-redux';
import PersonalPage from './PersonalPage';
import { fetchUserItems } from '../../selectors/items';
import ResultsList from '../body/searchResults/ResultsList';
import resources from '#resources#';
const editItemSuccessMessage = resources.personalPage.editItem.updatedSuccessfully;
const addItemSuccessMessage = resources.personalPage.addItem.createdSuccessfully;
const deleteItemSuccessMessage = resources.personalPage.itemForm.deletedSuccessfully;

class MyItems extends React.Component {
    state = {
        items: [],
        isLoading: true
    }
    async componentDidMount() {
        const items = await fetchUserItems();
        if (items) {
            this.setState((prevState) => ({
                isLoading: false,
                items: items
            }));
        }
    }
    render() {
        return (
            <div className='my-items__wrapper'>
                <h1>המודעות שלי:</h1>
                {
                    (this.props.error === editItemSuccessMessage || this.props.error === addItemSuccessMessage || this.props.error === deleteItemSuccessMessage) && (
                        <p className='success-message'>{this.props.error}</p>
                    )
                }
                <div className='items__container'>
                    <ResultsList itemsArr={this.state.items} isLoading={this.state.isLoading} showEditLink={true} />
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    error: state.itemForm.error
})
const mapDispatchToProps = (dispatch) => ({

})
const Body = connect(mapStateToProps, mapDispatchToProps)(MyItems);
export default () => (<PersonalPage childComponent={Body} selected={'edit'} />);