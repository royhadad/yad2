import moment from 'moment';
export default (item) => {
    const tomorrow = moment(new Date()).add(1, 'days');
    if ((item.isImmediateEntry === true) || (item.entryDate !== undefined && moment(item.entryDate).isSameOrBefore(tomorrow, 'day'))) {
        return 'item-background-red';
    } else if (item.sellerDetails.isPrivate) {
        return 'item-background-white';
    } else {
        return 'item-background-yellow';
    }
}