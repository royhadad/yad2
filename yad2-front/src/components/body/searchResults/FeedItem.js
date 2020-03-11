import React from 'react';

class FeedItem extends React.Component {
    render() {
        return (
            <div className='feed-item--closed'>
                <div className={'feed-item--closed__image__wrapper'}>
                    image
                </div>
                <div className={'feed-item--closed__props__wrapper'}>
                    props
                </div>
                <div className={'feed-item--closed__price__wrapper'}>
                    price
                </div>
            </div>
        )
    }
}

export default FeedItem;