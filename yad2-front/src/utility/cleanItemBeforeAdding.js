import { store } from '#src#/index';
import { setError } from '#actions#/itemForm';
import resources from '#resources#';
const errors = resources.personalPage.itemForm.errors;
const dispatchError = (error) => {
    store.dispatch(setError(error));
    return false;
}

export default (item) => {
    try {
        //console.log('before clean:\n' + JSON.stringify(item));
        if (item.location === undefined) {
            return dispatchError(errors.location);
        }
        if (item.price === undefined) {
            return dispatchError(errors.price);
        }
        if (item.size === undefined) {
            return dispatchError(errors.size);
        }
        if (item.floor === undefined) {
            return dispatchError(errors.floor);
        }
        if (item.rooms === undefined) {
            return dispatchError(errors.rooms);
        }

        //you dont have to insert a date
        // if (item.entryDate === undefined && item.isImmediateEntry === false) {
        //     return dispatchError(errors.entryDate);
        // }

        if (item.isImmediateEntry === true || !item.entryDate) {
            item.entryDate = null;
        }

        item.location = {
            placeId: item.location.placeId,
            description: item.location.description,
            city: item.location.city
        };
        if (item.category === 'roommates') {
            item.type = undefined;
        } else if (item.type === undefined) {
            return dispatchError(errors.type);
        }

        if (item.category !== 'forsale' && item.category !== 'commercial') {
            item.isBrokerage = undefined;
        }

        if (item.category === 'commercial') {
            if (item.isCommercialSale === undefined) {
                return dispatchError(errors.isCommercialSale);
            }
        } else {
            item.isCommercialSale = undefined;
        }

        if (item.category === 'roommates') {
            if (item.roommates === undefined) {
                return dispatchError(errors.roommates);
            }
        } else {
            item.roommates = undefined;
        }

        //console.log('returning the item!');
        //console.log('after clean:\n' + JSON.stringify(item));
        return item;
    } catch (e) {
        //TODO remove e
        alert('something went wrong, check your input!' + e);
        return false;
    }
}