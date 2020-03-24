import React from 'react';
import resources from '#resources#';
const bodyResources = resources.body.searchResults.feedItem.body;
const getPropertiesArr = (item) => {
    const totalProperties = resources.body.searchBar.advancedProperties[item.category];
    const itemProperties = item.properties;
    return totalProperties.map((property) => ({
        text: property.text,
        isOn: itemProperties.includes(property.value)
    }));
}
const getPropertiesOrganizedTo4Arrays = (propertiesArr) => {
    const quadArr = [[], [], [], []];
    propertiesArr.forEach((property, index) => {
        quadArr[index % 4].push(property);
    });
    return quadArr;
}
const getJSXFromQuadArr = (quadArr) => {
    return quadArr.map((singleColumn, index) => (
        <div key={index} className='feed-item__body__items__column'>
            {
                singleColumn.map((singleProperty, index) => (
                    <div key={index} className={'feed-item__body__item__' + (singleProperty.isOn ? 'on' : 'off')}>
                        {
                            singleProperty.text
                        }
                    </div>
                ))
            }
        </div>
    ));
}
const getPropertiesJSX = (item) => {
    const propertiesArr = getPropertiesArr(item);
    const quadArr = getPropertiesOrganizedTo4Arrays(propertiesArr);
    const propertiesJSX = getJSXFromQuadArr(quadArr);
    return propertiesJSX;
}
export default ({ item }) => (
    <div className='feed-item__body__middle'>
        <span>{bodyResources.middleHeader}</span>
        <div className='feed-item__body__middle__items'>
            {
                getPropertiesJSX(item)
            }
        </div>
        <hr />
    </div>
);