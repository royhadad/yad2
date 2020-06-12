const getArrWithoutDuplicates = require('../src/utils/getArrWithoutDuplicates');

//unit test
test('getArrWithoutDuplicates', () => {
    const arr = ["aba", "saba", "ima", "doda", "aba", "aba", "saba"];
    const arrCopy = [];
    for (str of arr) {
        arrCopy.push(str);
    }
    const expectedArrWithoutDuplicates = ["aba", "saba", "ima", "doda"];
    const arrWithoutDuplicates = getArrWithoutDuplicates(arr);

    //check if no side effect on original arr
    for (let index = 0; index < arrCopy.length; index++) {
        expect(arr[index]).toBe(arrCopy[index]);
    }

    //check if changes were made to returned array
    for (let index = 0; index < expectedArrWithoutDuplicates.length; index++) {
        expect(expectedArrWithoutDuplicates[index]).toBe(arrWithoutDuplicates[index]);
    }
})