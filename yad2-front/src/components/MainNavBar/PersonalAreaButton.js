import React from 'react';
import { Link } from 'react-router-dom';
import resources from '#resources#';

const PersonalAreaButton = () => {
    return (
        <div className="personal-area-button__wrapper">
            <Link to='/personal' className='react-link'>
                <div className="personal-area-button">
                    {resources.general.unicodeChars.person}
                </div>
            </Link>
        </div>
    );
};

export default PersonalAreaButton;