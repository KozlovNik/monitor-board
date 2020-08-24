import React, { useState, useEffect } from 'react';

import SliderImage from '../slider-image/slider-image';

import './slider.css';


const Slider = ({ image1, image2, image3 }) => {

    let sliderArr = [image1, image2, image3]
    // filtering if number of images fewer than maximum possible
    sliderArr = sliderArr.filter(image => image)

    const [x, setX] = useState(0);

    const goRight = () => {
        setX(x => x === -100 * (sliderArr.length - 1) ? 0 : x - 100);
    }

    const goLeft = () => {
        setX(x => x === 0 ? -100 * (sliderArr.length - 1) : x + 100);
    }

    const [intervalId, setIntervalId] = useState(() => goRight);

    useEffect(() => {
        const id = setInterval(intervalId, 15000);
        return () => clearInterval(id);
    }, [intervalId])

    const handleLeftButtonClick = () => {
        goLeft();
        setIntervalId(() => goRight);
    }

    const handleRightButtonClickht = () => {
        goRight()
        setIntervalId(() => goRight)
    }

    return (
        <div className="slider" >
            {sliderArr.map((path, ind) => {
                return (
                    <div key={ind}
                        className="slide"
                        style={{ transform: `translateX(${x}%)` }}>
                        {<SliderImage path={path} />}
                    </div>
                )
            })}
            <button
                className="slider__button slider__button--left"
                onClick={handleLeftButtonClick}>
            </button>
            <button
                className="slider__button slider__button--right"
                onClick={handleRightButtonClickht}>
            </button>
        </div >
    )
}

export default Slider;