import React, { useState } from 'react';
import resources from '#resources#';
import { Link } from 'react-router-dom';
const sellerDetailsResources = resources.body.searchResults.feedItem.header.sellerDetails;

export default (props) => {
    const [shouldShowDropDown, toggleDropDown] = useState(false);

    return (
        <div className='feed-item__seller-details' onClick={(e) => e.stopPropagation()}>
            <div className='feed-item__seller-details__header' onClick={() => toggleDropDown(!shouldShowDropDown)}>
                {resources.general.unicodeChars.telephone + ' '}{sellerDetailsResources.headerText}
            </div>
            {
                shouldShowDropDown &&
                (
                    <div className='feed-item__seller-details__items'>
                        <div className='feed-item__seller-details__item1'>
                            {props.item.sellerDetails.name}
                        </div>
                        <div className='feed-item__seller-details__item2'>
                            <span>
                                {props.item.sellerDetails.phoneNumber}
                            </span>
                        </div>
                        <div className='feed-item__seller-details__item3'>
                            <Link to={"/users/" + props.item.sellerId} className='feed-item__seller-details__to-seller-page'>{sellerDetailsResources.toSellerPageText}</Link>
                        </div>
                    </div>
                )
            }
        </div>
    );
}