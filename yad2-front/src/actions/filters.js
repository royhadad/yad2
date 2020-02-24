//SET CATAGORY
export const setCategory = (category) => ({
    type: 'SET_CATEGORY',
    category
});

//SORT BY DATE
export const sortByDate = () => ({
    type: 'SORT_BY_DATE'
});

//SORT BY PRICE HIGH LOW
export const sortByPriceHighlow = () => ({
    type: 'SORT_BY_PRICE_HIGH_LOW'
});

//SORT BY PRICE LOW HIGH
export const sortByPriceLowHigh = () => ({
    type: 'SORT_BY_PRICE_LOW_HIGH'
});

//TOGGLE SHOW ONLY ITEMS WITH PRICE
export const toggleShowOnlyItemsWithPrice = () => ({
    type: 'TOGGLE_SHOW_ONLY_ITEMS_WITH_PRICE'
});

//TOGGLE SHOW ONLY ITEMS WITH IMAGE
export const toggleShowOnlyItemsWithImage = () => ({
    type: 'TOGGLE_SHOW_ONLY_ITEMS_WITH_IMAGE'
});