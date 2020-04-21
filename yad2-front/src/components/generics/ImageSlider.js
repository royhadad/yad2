import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import Img from '../generics/Img';

//HOW TO USE:
//recieves the following props:
//images: string[]
const modalStyle = {
    overlay: {
        backgroundColor: '#353535',
        zIndex: 5
    },
    content: {
        zIndex: 5,
        margin: '2rem 13%',
        padding: 0,
        border: 'none',
    }
}
class ImageSlider extends React.Component {
    render() {
        return (
            <div className='image-slider__wrapper'>

                <div className='image-slider__container'>
                    <Carousel
                        infiniteLoop={true}
                        showThumbs={false}
                    >
                        {this.props.images.map((url, index) => (
                            <div key={index}>
                                <Img
                                    className='image-slider__image'
                                    alt={`property ${index + 1}`}
                                    src={url}
                                    spinnerSize={70}
                                />
                            </div>
                        ))}
                    </Carousel>
                </div>
            </div>
        )
    }
}

export { modalStyle };
export default ImageSlider;