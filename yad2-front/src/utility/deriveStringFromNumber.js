export default (num) => {
    if (num === undefined) {
        return '';
    }
    let str = num.toString();
    let res = '';
    for (let index = str.length - 1, counter = 0; index >= 0; index-- , counter++) {
        res += (counter % 3 === 0 && index !== str.length - 1) ? ',' : '';
        res += str[index];
    }
    res = res.split('').reverse().join('');
    return res;
};