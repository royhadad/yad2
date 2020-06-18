export default (fileName) => {
    const fileSplit = fileName.split('.');
    return fileSplit[fileSplit.length - 1];
}