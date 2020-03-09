//SET CURRENT PAGE
export const setCurrentPage = (currentPage) => ({
    type: 'SET_CURRENT_PAGE',
    currentPage
});

//SET NUM OF PAGES
export const setNumOfPages = (numOfPages) =>({
    type: 'SET_NUM_OF_PAGES',
    numOfPages
});

//SET TOTAL ITEMS
export const setTotalItems = (totalItems) =>({
    type: 'SET_TOTAL_ITEMS',
    totalItems
});

//SET ITEMS ARR
export const setItemsArr = (itemsArr) => ({
    type: 'SET_ITEMS_ARR',
    itemsArr
})
//SET IS LOADING
export const setIsLoading = (isLoading)=>({
    type: 'SET_IS_LOADING',
    isLoading
})
//SET SEARCHED LOCATION
export const setSearchedLocation = (searchedLocation)=>({
    type: 'SET_SEARCHED_LOCATION',
    searchedLocation
});