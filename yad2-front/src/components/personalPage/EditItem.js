import React from 'react';
import PersonalPage from './PersonalPage';
import ItemForm from './ItemForm';
import ReactLoading from 'react-loading';
import { fetchItemById } from '../../selectors/items';
import { startEditItem, startDeleteItem } from '../../actions/itemForm';
import resources from '#resources#';
const editItemResources = resources.personalPage.editItem;

class EditItem extends React.Component {
    state = {
        isLoading: true,
        fetchedItem: undefined
    }
    async componentDidMount() {
        this.setState(() => ({ isLoading: true }));
        const item = await fetchItemById(this.props.match.params.id);
        if (item) {
            this.setState(() => ({ fetchedItem: item, isLoading: false }));
        } else {
            this.setState(() => ({ isLoading: false }));
            alert('couldn\'t find item');
        }
    }
    render() {
        return (
            <div className='add-item__wrapper'>
                <h1>{editItemResources.header}</h1>
                {
                    this.state.isLoading ? (
                        <div className='spinner-wrapper'>
                            <ReactLoading type='bubbles' color='#ff7100' width={256} height={256} />
                        </div>
                    ) : (
                            <ItemForm
                                item={this.state.fetchedItem}
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
export default (props) => (<PersonalPage childComponent={EditItem} selected={'edit'} {...props} />);