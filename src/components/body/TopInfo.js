import React from 'react';

const TopInfo = () => {
    return (
        <React.Fragment>
            <div className='top-info__wrapper'>
                <div className='top-info__currentNav'>
                    אבא-> אמא -> סבא
            </div>
                <button className='top-info__accessibility-button'>
                    נגישות <span style={{ fontFamily: 'Calibri', fontSize: '3rem' }} role="img" aria-label="person">&#9855;</span>
                </button>
            </div>
            <div className='top-info__spacer'></div>
        </React.Fragment>
    );
};
export default TopInfo;