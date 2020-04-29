export default (item) => {
    try {
        console.log(item);
        if (
            item.price === undefined ||
            item.size === undefined ||
            item.location === undefined ||
            item.floor === undefined ||
            item.rooms === undefined
        ) {
            return false;
        }

        if (item.entryDate === undefined && item.isImmediateEntry === false) {
            return false;
        }

        item.location = {
            placeId: item.location.placeId,
            description: item.location.description,
            city: item.location.formattedSuggestion.mainText
        };
        if (item.category === 'roommates') {
            item.type = undefined;
        }

        if (item.category !== 'forsale' && item.category !== 'commercial') {
            item.isBrokerage = undefined;
        }

        if (item.category === 'commercial') {
            if (item.isCommercialSale === undefined) {
                return false;
            }
        } else {
            item.isCommercialSale = undefined;
        }

        if (item.category === 'roommates') {
            if (item.roommates === undefined) {
                return false;
            }
        } else {
            item.roommates = undefined;
        }

        console.log('returning the item!');
        return item;
    } catch (e) {
        alert('something went wrong, check your input!');
        return false;
    }
}