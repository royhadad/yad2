export default (statusCode) => {
    if (statusCode === 401) {
        window.location.reload();
    } else {
        alert('something went wrong');
    }
}