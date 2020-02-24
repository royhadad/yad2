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