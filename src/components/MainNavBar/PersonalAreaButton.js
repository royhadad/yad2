import React from 'react';

const PersonalAreaButton = () => {
    return (
        <div className="personal-area-button__wrapper">
            <a href='url'>
                <div className="personal-area-button">
                    <span style={{ fontFamily: 'Calibri' }} role="img" aria-label="person">&#128100;</span>
                </div>
            </a>
        </div>
    );
};

export default PersonalAreaButton;