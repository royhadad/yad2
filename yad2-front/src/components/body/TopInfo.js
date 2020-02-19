import React from 'react';
import resources from '../../resources.json';

const TopInfo = () => {
    return (
        <React.Fragment>
            <div className='top-info__wrapper'>
                <div className='top-info__currentNav'>
                    אבא-> אמא -> סבא
            </div>
                <button className='top-info__accessibility-button' onClick={()=>alert('TODO')}>
                    {resources.body.topInfo.accessibilityText}<span>{resources.general.unicodeChars.personInWheelchair}</span>
                </button>
            </div>
            <div className='top-info__spacer'></div>
        </React.Fragment>
    );
};
export default TopInfo;