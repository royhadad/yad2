const { base64encode } = require('nodejs-base64');

export default (state) => {
    let queryString = '?';
    queryString += `sortBy=${state.filters.sortBy}`;
    queryString += `&page=${state.items.currentPage}`;
    queryString += `&itemsPerPage=${state.items.itemsPerPage}`;
    queryString += `&search=${base64encode(JSON.stringify(state.filters.search))}`;
    return queryString;
}