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

//SET MIN ROOMS
export const setMinRooms = (minRooms)=>({
    type: 'SET_MIN_ROOMS',
    minRooms
});
//SET MAX ROOMS
export const setMaxRooms = (maxRooms)=>({
    type: 'SET_MAX_ROOMS',
    maxRooms
});
//SET MIN PRICE
export const setMinPrice = (minPrice)=>({
    type: 'SET_MIN_PRICE',
    minPrice
});
//SET MAX PRICE
export const setMaxPrice = (maxPrice)=>({
    type: 'SET_MAX_PRICE',
    maxPrice
});
//SET MIN FLOOR
export const setMinFloor = (minFloor)=>({
    type: 'SET_MIN_FLOOR',
    minFloor
});
//SET MAX FLOOR
export const setMaxFloor = (maxFloor)=>({
    type: 'SET_MAX_FLOOR',
    maxFloor
});
//SET MIN SIZE
export const setMinSize = (minSize)=>({
    type: 'SET_MIN_SIZE',
    minSize
});
//SET MAX SIZE
export const setMaxSize = (maxSize)=>({
    type: 'SET_MAX_SIZE',
    maxSize
});
//SET MIN ROOMMATES
export const setMinRoommates = (minRoommates)=>({
    type: 'SET_MIN_ROOMMATES',
    minRoommates
});
//SET MAX ROOMMATES
export const setMaxRoommates = (maxRoommates)=>({
    type: 'SET_MAX_ROOMMATES',
    maxRoommates
});
//ADD TYPE
export const addType = (propertyType)=>({
    type: 'ADD_TYPE',
    propertyType
})
//REMOVE TYPE
export const removeType = (propertyType)=>({
    type: 'REMOVE_TYPE',
    propertyType
})
//TOGGLE ONLY IMMEDIATE ENTRY
export const toggleOnlyImmediateEntry = ()=>({
    type: 'TOGGLE_ONLY_IMMEDIATE_ENTRY'
})
//SET MIN ENTRY DATE
export const setMinEntryDate = (date) =>({
    type: 'SET_MIN_ENTRY_DATE',
    date
})