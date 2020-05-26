import { connect } from 'react-redux';
import { toggleProperty } from '../../../actions/itemForm';
import { SearchBarAdvancedPropertiesWithoutStore } from '../../body/searchBar/SearchFields/SearchBarAdvancedProperties';

const mapStateToProps = (state) => ({
    category: state.itemForm.item.category,
    selectedProperties: state.itemForm.item.properties
})
const mapDispatchToProps = (dispatch) => ({
    toggleProperty: (property) => dispatch(toggleProperty(property))
})
export default connect(mapStateToProps, mapDispatchToProps)(SearchBarAdvancedPropertiesWithoutStore);