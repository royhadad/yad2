import React from 'react';
import { Link } from 'react-router-dom';

const AddListingButton = () => {
    return (
        <div className="add-listing-button__wrapper">
            <Link to='/realestate/add-listing' className='react-link'>
                <div className="add-listing-button">
                    + פרסום מודעה חדשה
                </div>
            </Link>
        </div>
    );
};

export default AddListingButton;