import React from 'react';
import resources from '#resources#';
const bodyResources = resources.body.searchResults.feedItem.body;
const topProperties = bodyResources.topProperties;
//TODO get the actual properties to show
const getTopPropertiesJSXByItem = (item) => {
    const getTopPropertiesByItem = (item) => {
        const topProps = {
            "entryDate": item.entryDate,
            "balconies": 4,
            "numOfFloors": item.floor,
            "parkingSpots": 0
        }
        return Object.entries(topProps);
    }
    const mapEntriesToHalfList = (entries) => (
        <div className='items__half__wrapper'>
            {
                entries.map(([key, value]) => (
                    <div className='item__wrapper'>
                        <span className='item__key'>{topProperties[key]}</span>
                        <span className='item__value'>{value === undefined ? topProperties['unspecified'] : value}</span>
                    </div>
                ))
            }
        </div>
    );
    const entries = getTopPropertiesByItem(item);
    const entries1 = entries.slice(0, Math.ceil(entries.length / 2));
    const entries2 = entries.slice(Math.ceil(entries.length / 2));
    return (
        <div className='feed-item__body__top__properties'>
            {mapEntriesToHalfList(entries1)}
            {mapEntriesToHalfList(entries2)}
        </div>
    );
}
export default ({ item }) => (
    <div className='feed-item__body__top'>
        <div className='feed-item__body__top__name-container'>
            {
                item.isPrivate ?
                    (bodyResources.realEstateOfficeNameText) :
                    (bodyResources.privateNameText)
            }
            {item.sellerDetails.name}
        </div>
        <hr />
        <div className='feed-item__body__top__description'>
            <span>{bodyResources.descriptionTitle}</span>
            <p>{item.text}</p>
        </div>
        {getTopPropertiesJSXByItem(item)}
        <hr />
    </div>
);