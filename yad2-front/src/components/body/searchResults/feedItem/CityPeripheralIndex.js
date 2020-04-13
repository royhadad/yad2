import React from 'react';
import { CircularProgressbarWithChildren } from 'react-circular-progressbar';
import ReactLoading from 'react-loading';
import resources from '#resources#';
const bottomResources = resources.body.searchResults.feedItem.body.bottom;

const getInsideJSXAndCityIndex = (cityIndex) => {
    let insideJSX;
    let insideTextHeader = '';
    let insideTextBody = '';
    let headerStyle = {};
    if (cityIndex === undefined) {
        cityIndex = 0;
        insideJSX = (<ReactLoading type='bubbles' color='#ff7100' />);
    } else {
        if (cityIndex === null) {
            insideTextHeader = bottomResources.noData;
            cityIndex = 0;
            headerStyle['fontSize'] = '1.6rem';
        } else {
            if (cityIndex.toString().length < 2) {
                insideTextHeader = cityIndex + '.0';
            } else {
                insideTextHeader = cityIndex;
            }
            insideTextBody = bottomResources.outOf;
        }
        insideJSX = (
            <div className='progress-bar__inside'>
                <span className='progress-bar__inside__header' style={headerStyle}>
                    {insideTextHeader}
                </span>
                <span className='progress-bar__inside__body'>
                    {insideTextBody}
                </span>
            </div>
        )
    }
    return { insideJSX, cityIndex };
}

export default (props) => {
    const { insideJSX, cityIndex } = getInsideJSXAndCityIndex(props.cityIndex);

    return (
        <div className='peripheral-index__wrapper'>
            {
                <CircularProgressbarWithChildren
                    minValue={0}
                    maxValue={5}
                    value={cityIndex}
                    styles={{ path: { stroke: '#ff7100' } }}
                >
                    {insideJSX}
                </CircularProgressbarWithChildren>
            }
        </div >
    )
}