import {
    createStore,
    combineReducers,
    applyMiddleware,
    compose
} from 'redux';
import thunk from 'redux-thunk';
import authReducer from '#src#/reducers/auth';
import filtersReducer from '#src#/reducers/filters';
import itemsReducer from '#src#/reducers/items';
import modalReducer from '#src#/reducers/modal';
import itemFormReducer from '#src#/reducers/itemForm';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
    const store = createStore(
        combineReducers({
            filters: filtersReducer,
            items: itemsReducer,
            auth: authReducer,
            modal: modalReducer,
            itemForm: itemFormReducer
        }),
        composeEnhancers(applyMiddleware(thunk))
    );

    return store;
};