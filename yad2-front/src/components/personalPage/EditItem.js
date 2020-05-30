import React from 'react';
import { connect } from 'react-redux';
import PersonalPage from './PersonalPage';
import ItemForm from './ItemForm';
import ReactLoading from 'react-loading';
import { fetchItemById } from '../../selectors/items';
import { startEditItem, startDeleteItem, setFetchedItem, setIsLoading } from '../../actions/itemForm';
import resources from '#resources#';
const editItemResources = resources.personalPage.editItem;

class EditItem extends React.Component {
    async componentDidMount() {
        const item = await fetchItemById(this.props.match.params.id);
        if (item) {
            this.props.setFetchedItem(item);
            this.props.setIsLoading(false);
        } else {
            alert('couldn\'t find item');
        }
    }
    render() {
        return (
            <div className='add-item__wrapper'>
                <h1>{editItemResources.header}</h1>
                {
                    this.props.isLoading ? (
                        <div className='spinner-wrapper'>
                            <ReactLoading type='bubbles' color='#ff7100' width={256} height={256} />
                        </div>
                    ) : (
                            <ItemForm
                                item={this.props.fetchedItem}
                                onSubmit={() => (startEditItem(this.props.match.params.id))}
                                onSubmitText={editItemResources.onSubmitText}
                                successText={editItemResources.updatedSuccessfully}
                                isEdit={true}
                                startDeleteItem={() => (startDeleteItem(this.props.match.params.id))}
                            />
                        )
                }
            </div>
        );
    }
}
const mapStateToProps = (state) => ({
    fetchedItem: state.itemForm.fetchedItem,
    isLoading: state.itemForm.isLoading
})
const mapDispatchToProps = (dispatch) => ({
    setFetchedItem: (fetchedItem) => (dispatch(setFetchedItem(fetchedItem))),
    setIsLoading: (isLoading) => (dispatch(setIsLoading(isLoading)))
})
const Body = connect(mapStateToProps, mapDispatchToProps)(EditItem);
export default (props) => (<PersonalPage childComponent={Body} selected={'edit'} {...props} />);