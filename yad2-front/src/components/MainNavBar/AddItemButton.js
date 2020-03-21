import React from 'react';
import { Link } from 'react-router-dom';
import resources from '#resources#';

const AddItemButton = () => {
    return (
        <div className="add-item-button__wrapper">
            <Link to='/realestate/add-item' className='react-link'>
                <div className="add-item-button">
                    {resources.header.addItemButton.text}
                </div>
            </Link>
        </div>
    );
};

export default AddItemButton;