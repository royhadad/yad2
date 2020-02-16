export const deriveXfromViewPortX = (x) =>{
    const scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;
    return x+scrollLeft;
};
export const deriveYfromViewPortY = (y) =>{
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    return y+scrollTop;
};