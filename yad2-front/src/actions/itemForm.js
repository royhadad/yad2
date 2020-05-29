import { store } from '../index';
import cleanItemBeforeAdding from '../utility/cleanItemBeforeAdding';
import UnexpectedAuthErrorHandler from '../utility/UnexpectedAuthErrorHandler';
import { RedirectToMyItems } from '../routers/AppRouter';
import resources from '#resources#';

//SET ITEM
export const setItem = (item) => ({
    type: 'ITEM_FORM_SET_ITEM',
    item
})
//RESET TO DEFAULT
export const resetToDefault = () => ({
    type: 'ITEM_FORM_RESET_TO_DEFAULT'
})
//SET CATAGORY
export const setCategory = (category) => ({
    type: 'ITEM_FORM_SET_CATEGORY',
    category
});
//SET TEXT
export const setText = (text) => ({
    type: 'ITEM_FORM_SET_TEXT',
    text
})
//SET LOCATION
export const setLocation = (location) => ({
    type: 'ITEM_FORM_SET_LOCATION',
    location
})
//SET TYPE
export const setType = (propertyType) => ({
    type: 'ITEM_FORM_SET_TYPE',
    propertyType
})
//TOGGLE PROPERTY
export const toggleProperty = (property) => ({
    type: 'ITEM_FORM_TOGGLE_PROPERTY',
    property
})
//SET ROOMS
export const setRooms = (rooms) => ({
    type: 'ITEM_FORM_SET_ROOMS',
    rooms
});
//SET PRICE
export const setPrice = (price) => ({
    type: 'ITEM_FORM_SET_PRICE',
    price
});
//SET FLOOR
export const setFloor = (floor) => ({
    type: 'ITEM_FORM_SET_FLOOR',
    floor
});
//SET SIZE
export const setSize = (size) => ({
    type: 'ITEM_FORM_SET_SIZE',
    size
});
//SET ROOMMATES
export const setRoommates = (roommates) => ({
    type: 'ITEM_FORM_SET_ROOMMATES',
    roommates
});
//TOGGLE IS IMMEDIATE ENTRY
export const toggleIsImmediateEntry = () => ({
    type: 'ITEM_FORM_TOGGLE_IS_IMMEDIATE_ENTRY'
});
//SET ENTRY DATE
export const setEntryDate = (entryDate) => ({
    type: 'ITEM_FORM_SET_ENTRY_DATE',
    entryDate
});
//TOGGLE IS BROKERAGE
export const toggleIsBrokerage = () => ({
    type: 'ITEM_FORM_TOGGLE_IS_BROKERAGE'
})
//SET_IS_COMMERCIAL_SALE
export const setIsCommercialSale = (isCommercialSale) => ({
    type: 'ITEM_FORM_SET_IS_COMMERCIAL_SALE',
    isCommercialSale
})
//CLEAR FORM
export const clearForm = () => ({
    type: 'ITEM_FORM_CLEAR_FORM'
});
//SET ERROR
export const setError = (error) => ({
    type: 'ITEM_FORM_SET_ERROR',
    error
});
//SET LOCATION CURRENT TEXT
export const setLocationCurrentText = (locationCurrentText) => ({
    type: 'ITEM_FORM_SET_LOCATION_CURRENT_TEXT',
    locationCurrentText
});
//SET IMAGES
export const setImages = (images) => ({
    type: 'ITEM_FORM_SET_IMAGES',
    images
})

const callAddImagesAfterAddOrEdit = async (item) => {
    const itemId = item._id;
    const imagesStatus = await addImagesToItem(itemId);
    if (imagesStatus !== 201) {
        throw imagesStatus;
    }
}

export const startEditItem = async (itemId) => {
    const item = store.getState().itemForm.item;
    const cleanItem = cleanItemBeforeAdding(item);
    if (!cleanItem) {
        return;
    }
    let response;
    try {
        const requestOptions = {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(cleanItem)
        }
        response = await fetch(`/api/items/${itemId}`, requestOptions);
        if (response.status !== 200) {
            throw response.status;
        }
        response = await response.json();

        await callAddImagesAfterAddOrEdit(response);

        const successMessage = resources.personalPage.editItem.updatedSuccessfully;
        RedirectToMyItems();
        store.dispatch(setError(successMessage));
    } catch (e) {
        console.log(e);

        response = await response.json();
        console.log(response);

        UnexpectedAuthErrorHandler(e);
    }
}

export const startAddItem = async () => {
    const item = store.getState().itemForm.item;
    const cleanItem = cleanItemBeforeAdding(item);
    if (!cleanItem) {
        return;
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
            throw response.status;
        }

        response = await response.json();

        await callAddImagesAfterAddOrEdit(response);

        const successMessage = resources.personalPage.addItem.createdSuccessfully;
        RedirectToMyItems();
        store.dispatch(setError(successMessage));
    } catch (e) {
        console.log(e);

        UnexpectedAuthErrorHandler(e);
    }
}

export const startDeleteItem = async (itemId) => {
    let response;
    try {
        const requestOptions = {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json' }
        }
        response = await fetch(`/api/items/${itemId}`, requestOptions);
        if (response.status !== 200) {
            throw response.status;
        }
        const successMessage = resources.personalPage.itemForm.deletedSuccessfully;
        RedirectToMyItems();
        store.dispatch(setError(successMessage));
    } catch (e) {
        UnexpectedAuthErrorHandler(e);
    }
}

export const addImagesToItem = async (itemId) => {
    let response;
    try {
        const files = store.getState().itemForm.images;
        const formData = new FormData();
        files.forEach((file) => {
            formData.append('image', file)
        })
        const requestOptions = {
            method: 'POST',
            headers: {},
            body: formData
        }
        response = await fetch(`/api/items/images/${itemId}`, requestOptions);
        return response.status;
    } catch (e) {
        response = await response.json();
        alert('something went wrong! ' + response);
    }
}