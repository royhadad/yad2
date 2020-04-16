import React from 'react';
import getFullImageURL from '#src#/utility/getFullImageURL';
import resources from '#resources#';
const footerResources = resources.body.searchResults.feedItem.footer;

const notImplementedOnClickHandler = (e) => {
    e.stopPropagation();
    alert('TODO');
}

export default (props) => (
    <div className='feed-item__footer'>
        <div className='feed-item__footer__right'>
            <span onClick={notImplementedOnClickHandler} className="newWindow"></span>
            <span onClick={notImplementedOnClickHandler}>{resources.general.unicodeChars.printer}</span>
            <span onClick={notImplementedOnClickHandler} style={{ opacity: '50%' }}>{resources.general.unicodeChars.link}</span>
            <span onClick={notImplementedOnClickHandler}>{resources.general.unicodeChars.email}</span>
            <span onClick={notImplementedOnClickHandler}><img style={{ width: 27, height: 20 }} src={getFullImageURL('facebook.png')} alt='share to facebook' /></span>
            <span onClick={notImplementedOnClickHandler}><img style={{ width: 27, height: 27 }} src={getFullImageURL('whatsapp.png')} alt='share to whatsapp' /></span>
        </div>
        <div className='feed-item__footer__left'>
            <span className='feed-item__footer__left__found-mistake' onClick={notImplementedOnClickHandler}>
                {
                    footerResources.foundMistakeText
                }
            </span>
            <span className='feed-item__footer__left__item-id'>
                {
                    footerResources.itemIdText + props.item.serialNumber
                }
            </span>
        </div>
    </div>
);