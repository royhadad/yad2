import React, { useState, useEffect } from 'react';
import CityPeripheralIndex from './CityPeripheralIndex';
import resources from '#resources#';
const bottomResources = resources.body.searchResults.feedItem.body.bottom;

const fetchCityIndex = async (cityName, setCityIndex) => {
    try {
        let response = await fetch(`/api/peripheralIndex/${cityName}`);
        response = await response.json();
        if (response.error) {
            setCityIndex(null);
        } else {
            setCityIndex(response.peripheralIndex);
        }
    } catch (e) {
        setCityIndex(null);
    }
}

export default ({ item }) => {
    const [cityIndex, setCityIndex] = useState(undefined);
    useEffect(() => { fetchCityIndex(item.location.city, setCityIndex) }, [item]);

    return (
        <div className='feed-item__body__bottom'>
            <CityPeripheralIndex cityIndex={cityIndex} />
            <div className='feed-item__body__bottom__text'>
                <span>
                    {bottomResources.header}
                </span>
                <p>
                    {bottomResources.mainText}<br />
                    {bottomResources.credit}
                </p>
            </div>
        </div>
    )
};