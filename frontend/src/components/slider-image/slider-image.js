import React from 'react'

import './slider-image.css';

const SliderImage = ({ path }) => {
    return (
        <img
            src={path}
            alt=""
            className="slider-image" />
    )
}

export default SliderImage;