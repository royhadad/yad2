import { store } from '../index';
import cleanItemBeforeAdding from '../utility/cleanItemBeforeAdding';
import UnexpectedAuthErrorHandler from '../utility/UnexpectedAuthErrorHandler';
import { RedirectToMyItems } from '../routers/AppRouter';
import resources from '#resources#';

//SET ITEM
export const setItem = (item) => ({
    type: 'SET_ITEM',
    item
})
//RESET TO DEFAULT
export const resetToDefault = () => ({
    type: 'RESET_TO_DEFAULT'
})
//SET CATAGORY
export const setCategory = (category) => ({
    type: 'SET_CATEGORY',
    category
});
//SET TEXT
export const setText = (text) => ({
    type: 'SET_TEXT',
    text
})
//SET LOCATION
export const setLocation = (location) => ({
    type: 'SET_LOCATION',
    location
})
//SET TYPE
export const setType = (propertyType) => ({
    type: 'SET_TYPE',
    propertyType
})
//TOGGLE PROPERTY
export const toggleProperty = (property) => ({
    type: 'TOGGLE_PROPERTY',
    property
})
//SET ROOMS
export const setRooms = (rooms) => ({
    type: 'SET_ROOMS',
    rooms
});
//SET PRICE
export const setPrice = (price) => ({
    type: 'SET_PRICE',
    price
});
//SET FLOOR
export const setFloor = (floor) => ({
    type: 'SET_FLOOR',
    floor
});
//SET SIZE
export const setSize = (size) => ({
    type: 'SET_SIZE',
    size
});
//SET ROOMMATES
export const setRoommates = (roommates) => ({
    type: 'SET_ROOMMATES',
    roommates
});
//TOGGLE IS IMMEDIATE ENTRY
export const toggleIsImmediateEntry = () => ({
    type: 'TOGGLE_IS_IMMEDIATE_ENTRY'
});
//SET ENTRY DATE
export const setEntryDate = (entryDate) => ({
    type: 'SET_ENTRY_DATE',
    entryDate
});
//TOGGLE IS BROKERAGE
export const toggleIsBrokerage = () => ({
    type: 'TOGGLE_IS_BROKERAGE'
})
//SET_IS_COMMERCIAL_SALE
export const setIsCommercialSale = (isCommercialSale) => ({
    type: 'SET_IS_COMMERCIAL_SALE',
    isCommercialSale
})
//CLEAR FORM
export const clearForm = () => ({
    type: 'CLEAR_FORM'
});
//SET ERROR
export const setError = (error) => ({
    type: 'SET_ERROR',
    error
});
//SET LOCATION CURRENT TEXT
export const setLocationCurrentText = (locationCurrentText) => ({
    type: 'SET_LOCATION_CURRENT_TEXT',
    locationCurrentText
});

export const startEditItem = async (itemId) => {
    const item = store.getState().itemForm.item;
    const cleanItem = cleanItemBeforeAdding(item);
    if (!cleanItem) {
        return store.dispatch(setError('חסר לך שדה אח שלי'));
    }

    try {
        const requestOptions = {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(cleanItem)
        }
        let response = await fetch(`/api/items/${itemId}`, requestOptions);
        if (response.status !== 200) {
            throw response.status;
        }
        response = await response.json();
        const successMessage = resources.personalPage.editItem.updatedSuccessfully;
        store.dispatch(setError(successMessage));
        RedirectToMyItems();
    } catch (e) {
        UnexpectedAuthErrorHandler(e);
    }
}

export const startAddItem = async () => {
    const item = store.getState().itemForm.item;
    const cleanItem = cleanItemBeforeAdding(item);
    if (!cleanItem) {
        return store.dispatch(setError('חסר לך שדה אח שלי'));
    }

    try {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(cleanItem)
        }
        let response = await fetch(`/api/items`, requestOptions);
        console.log(response);

        if (response.status !== 201) {
            console.log('throwing error!', response.status);

            throw response.status;
        }
        console.log('didnt throw!');

        response = await response.json();
        const successMessage = resources.personalPage.addItem.createdSuccessfully;
        store.dispatch(setError(successMessage));
        console.log('got here');

        RedirectToMyItems();
    } catch (e) {
        console.log(e);

        UnexpectedAuthErrorHandler(e);
    }
}