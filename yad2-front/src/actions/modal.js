//OPEN MODAL
export const openModal = (childJSX, style) => ({
    type: 'OPEN_MODAL',
    childJSX,
    style
});

//CLOSE_MODAL
export const closeModal = () => ({
    type: 'CLOSE_MODAL'
})