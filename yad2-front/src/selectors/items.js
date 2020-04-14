import { setFilters, setLocationCurrentText } from '#actions#/filters';
import { setCurrentPage, setTotalItems, setItemsArr, setIsLoading, setSearchedLocation } from '#actions#/items';
import { store } from '#src#/index';
import getFeedQueryString from '#src#/utility/getFeedQueryString';

const cleanFilters = (filters) => {
    let temp;
    if (filters.minPrice > filters.maxPrice) {
        temp = filters.minPrice;
        filters.minPrice = filters.maxPrice;
        filters.maxPrice = temp;
    }
    if (filters.minSize > filters.maxSize) {
        temp = filters.minSize;
        filters.minSize = filters.maxSize;
        filters.maxSize = temp;
    }
    if (filters.minFloor > filters.maxFloor) {
        temp = filters.minFloor;
        filters.minFloor = filters.maxFloor;
        filters.maxFloor = temp;
    }
    if (filters.minRooms > filters.maxRooms) {
        temp = filters.minRooms;
        filters.minRooms = filters.maxRooms;
        filters.maxRooms = temp;
    }
    if (filters.minRoommates > filters.maxRoommates) {
        temp = filters.minRoommates;
        filters.minRoommates = filters.maxRoommates;
        filters.maxRoommates = temp;
    }
    return filters;
}

export const fetchItems = async (currentPage = 1) => {
    const { filters } = store.getState();
    store.dispatch(setFilters(cleanFilters(filters)));
    store.dispatch(setCurrentPage(currentPage));
    store.dispatch(setSearchedLocation(filters.search.location));
    store.dispatch(setLocationCurrentText(filters.search.location === undefined ? '' : filters.search.location.description));
    store.dispatch(setIsLoading(true));

    try {
        let response = await fetch(`/api/feed${getFeedQueryString(store.getState())}`);
        response = await response.json();
        if (response.error) {
            throw response.error;
        }

        const data = response;

        store.dispatch(setTotalItems(data.totalItems));
        store.dispatch(setItemsArr(data.items));
    } catch (e) {
        console.log(e);
    } finally {
        store.dispatch(setIsLoading(false));
    }
}