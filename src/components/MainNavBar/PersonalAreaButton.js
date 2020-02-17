import React from 'react';
import {Link} from 'react-router-dom';

const PersonalAreaButton = () => {
    return (
        <div className="personal-area-button__wrapper">
            <Link to='' className='react-link'>
                <div className="personal-area-button">
                    <span style={{ fontFamily: 'Calibri' }} role="img" aria-label="person">&#128100;</span>
                </div>
            </Link>
        </div>
    );
};

export default PersonalAreaButton;